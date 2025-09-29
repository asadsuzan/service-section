<?php
/**
 * Plugin Name: Services Card
 * Description: A service card block with multiple themes and an easy-to-use interface.
 * Version: 1.0.5
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: services-card
 * @fs_premium_only /freemius
 * @fs_free_only /freemius-lite
 */



// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}



if ( function_exists( 'sc_fs' ) ) {
	register_activation_hook(__FILE__, function () {
		if (is_plugin_active('services-card/services-card.php')) {
			deactivate_plugins('services-card/services-card.php');
		}
		if (is_plugin_active('services-card-pro/services-card.php')) {
			deactivate_plugins('services-card-pro/services-card.php');
		}
	});
	  
} else {
	define('Q3Q4SCB_VERSION', (isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST']) ? time() : '1.0.5');
	define('Q3Q4SCB_DIR_URL', plugin_dir_url(__FILE__));
	define('Q3Q4SCB_DIR_PATH', plugin_dir_path(__FILE__));
	define( 'Q3Q4SCB_HAS_PRO', file_exists( dirname(__FILE__) . '/vendor/freemius/start.php' ) );

	if ( ! function_exists( 'sc_fs' ) ) {
		function sc_fs() {
			global $sc_fs;

			if ( ! isset( $sc_fs ) ) {

				if ( Q3Q4SCB_HAS_PRO ) {
					require_once dirname(__FILE__) . '/vendor/freemius/start.php';
				}else {
					require_once dirname(__FILE__) . '/vendor/freemius-lite/start.php';
				}

				$q3q4scbConfig = array(
					'id'                  => '20850',
					'slug'                => 'services-card',
					'premium_slug'        => 'services-card-pro',
					'type'                => 'plugin',
					'public_key'          => 'pk_5281f27702c9ad825bd76b8effa9e',
					'is_premium'          => true,
					'premium_suffix'      => 'Pro',
					'has_premium_version' => true,
					'has_addons'          => false,
					'has_paid_plans'      => true,
					'wp_org_gatekeeper'   => 'OA7#BoRiBNqdf52FvzEf!!074aRLPs8fspif$7K1#4u4Csys1fQlCecVcUTOs2mcpeVHi#C2j9d09fOTvbC0HloPT7fFee5WdS3G',
					'trial'               => array(
						'days'               => 3,
						'is_require_payment' => false,
					),
					'menu'                => array(
						'slug'           => 'edit.php?post_type=services_card',
						'first-path'     => 'edit.php?post_type=services_card&page=demo_page',
					),
				);


				$sc_fs = Q3Q4SCB_HAS_PRO ? fs_dynamic_init( $q3q4scbConfig ) : fs_lite_dynamic_init( $q3q4scbConfig );
			}

			return $sc_fs;
		}

		
		sc_fs();
		do_action( 'sc_fs_loaded' );
	}

	function scbIsPremium(){
		return Q3Q4SCB_HAS_PRO ? sc_fs()->can_use_premium_code() : false;
	}

	// our plugin main logic
	if (! class_exists('Q3Q4ServiceCardPlugin')) {
		class Q3Q4ServiceCardPlugin {
			public function __construct() {
				add_action('init', [$this, 'onInit']);
				add_filter('manage_services_card_posts_columns', [$this, 'cptColumns']);
				add_action('manage_services_card_posts_custom_column', [$this, 'manageCptColumns'], 10, 2);
				add_shortcode('services_card', [$this, 'serviceCardShortcode']);
				add_action('admin_enqueue_scripts', [$this, 'adminEnqueueScripts']);
				add_action('admin_menu', [$this, 'q3q4_add_demo_submenu']);
			
				// for premium only
				add_action('wp_ajax_scbPremiumChecker', [$this, 'scbPremiumChecker']);
				add_action('wp_ajax_nopriv_scbPremiumChecker', [$this, 'scbPremiumChecker']);
				add_action('admin_init', [$this, 'registerSettings']);
				add_action('rest_api_init', [$this, 'registerSettings']);
			}
			function scbPremiumChecker(){
				// $nonce = sanitize_text_field($_POST['_wpnonce'] ?? null);
				$nonce = sanitize_text_field(wp_unslash($_POST['_wpnonce'] ?? ''));

				if (!wp_verify_nonce($nonce, 'wp_ajax')) {
					wp_send_json_error('Invalid Request');
				}
			

				wp_send_json_success([
					'isPipe' => scbIsPremium()
				]);
			
			}

			function registerSettings(){
				register_setting('scbUtils', 'scbUtils', [
					'show_in_rest' => [
						'name' => 'scbUtils',
						'schema' => ['type' => 'string']
					],
					'type' => 'string',
					'default' => wp_json_encode(['nonce' => wp_create_nonce('wp_ajax')]),
					'sanitize_callback' => 'sanitize_text_field'
				]);
			}

			public function onInit() {
				register_block_type(__DIR__ . '/build');
					register_post_type(
					'services_card',
					[
						'label'               => 'Service card',
						'labels'              => [
							'add_new' => 'Add New',
							'add_new_item' => 'Add New Service',
							'edit_item' => 'Edit Service',
							'not_found' => 'There was no service please add one'
							
						],
						'show_in_rest' => true,
						'public' => true,
						'publicly_queryable' => false,
						'menu_icon' => 'dashicons-screenoptions',
						'item_published' => 'Service Card Block Published',
						'item_updated' => 'Service Card Block Updated',
						'template' => [['services-card/services-cards']],
						// 'template_lock' => 'all',
					]
				);
			}

			

			function q3q4_add_demo_submenu(){
				add_submenu_page(
					'edit.php?post_type=services_card',
					'Demo and Help',
					'Demo & Help',
					'manage_options',
					'demo_page',
					[$this, 'q3q4_render_demo_page']
				);
			}
				
			function q3q4_render_demo_page(){ 
				?>
					<div
						id='q3q4AdminDashboard'
						data-info='<?php echo esc_attr( wp_json_encode( [
							'version' => Q3Q4SCB_VERSION,
							'isPremium' => scbIsPremium(),
							'hasPro' => Q3Q4SCB_HAS_PRO,
						] ) ); ?>'
					></div>
				<?php
			}

			public function manageCptColumns($columnName,  $postId): void  {
				if ('shortcode' === $columnName) {
					echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($postId) . '">
							<input value="[services_card id=' . esc_attr($postId) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($postId) . '\')" readonly>
							<span class="tooltip">Copy To Clipboard</span>
						</div>';
				}

				if ('publisher' === $columnName) {
					echo 'bplugins';
				}
			}

			public function displayContent($post): string{
				$blocks = parse_blocks($post->post_content);
				return render_block($blocks[0]);
			}

			public function cptColumns($columns): array {
				unset($columns['date']);
				$columns['shortcode'] = 'Shortcode';
				$columns['date']      = 'Date';
				$columns['publisher'] = 'Publisher';
				return $columns;
			}
	
			function serviceCardShortcode($atts){
					
					if (!isset($atts['id'])) {
						$attr_string = '';
						foreach ($atts as $key => $value) {
							$attr_string .= $key . '="' . esc_attr($value) . '" ';
						}
						$shortcode = '[bypass_audio_player ' . trim($attr_string) . ']';
						return do_shortcode($shortcode);
					}

					$post_id = $atts['id'];
					$post = get_post( $post_id );

					if ( !$post ) {
						return '';
					}

					if ( post_password_required( $post ) ) {
						return get_the_password_form( $post );
					}

					switch ( $post->post_status ) {
						case 'publish':
							return $this->displayContent( $post );
							
						case 'private':
							if (current_user_can('read_private_posts')) {
								return $this->displayContent( $post );
							}
							return '';
							
						case 'draft':
						case 'pending':
						case 'future':
							if ( current_user_can( 'edit_post', $post_id ) ) {
								return $this->displayContent( $post );
							}
							return '';
							
						default:
							return '';
					}
				}

				public function adminEnqueueScripts($screen): void {
					global $typenow;

					if ('services_card' === $typenow) {
						
						wp_enqueue_script( 'admin-post-js', Q3Q4SCB_DIR_URL . 'build/admin-post.js', [], Q3Q4SCB_VERSION, true );
						wp_enqueue_style( 'admin-post-css', Q3Q4SCB_DIR_URL . 'build/admin-post.css', [], Q3Q4SCB_VERSION );

						if ($screen === "services_card_page_demo_page") {
							wp_enqueue_script( 'bpl-admin-dashboard-js', Q3Q4SCB_DIR_URL . 'build/admin-dashboard.js', [ 'react', 'react-dom' ], Q3Q4SCB_VERSION, true );
							wp_enqueue_style( 'bpl-admin-dashboard-css', Q3Q4SCB_DIR_URL . 'build/admin-dashboard.css', [], Q3Q4SCB_VERSION );
						}

					}
			}

		

		}

		new Q3Q4ServiceCardPlugin();
	}
}
?>
