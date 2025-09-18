<?php
/**
 * Plugin Name: Services Section 
 * Description:  A service card block with multiple themes with easy to use interface.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: services-card-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'Q3Q4SCB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'Q3Q4SCB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'Q3Q4SCB_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'Q3Q4SERVICECARDPLUGIN' ) ){
	class Q3Q4SERVICECARDPLUGIN{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_filter('manage_q3q4_service_card_posts_columns', [$this, 'q3q4_cpt_callback']);
			add_action('manage_q3q4_service_card_posts_custom_column', [$this, 'q3q4_manage_cpt_columns'], 10, 2);
		    add_shortcode('q3q4_service_card', [$this, 'q3q4_service_card_block_shortcode']);
			add_action('admin_enqueue_scripts', [$this, 'sc_admin_enqueue_script']);
			add_action('admin_menu', [$this,"q3q3_admin_menu_cb"]);
	
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );

				register_post_type('q3q4_service_card', [
				'label' => 'Service card',
				'description' => 'this is Service_card and seo friendly card',
				'labels' => [
					'name' => __('Service_card', 'services-card-block'),
					'singular_name' => __('Service_card', 'services-card-block'),
					'add_new' => __('Add New', 'services-card-block'),
					'add_new_item' => __('Add New Service', 'services-card-block'),
					'edit_item' => __('Edit Service_card', 'services-card-block'),
					'new_item' => __('New Service_card', 'services-card-block'),
					'view_item' => __('View Service_card', 'services-card-block'),
					'view_items' => __('View Service_card', 'services-card-block'),
					'search_items' => __('Search Service_card', 'services-card-block'),
					'not_found' => __('No Service_card found.', 'services-card-block'),
					'not_found_in_trash' => __('No Service_card found in Trash.', 'services-card-block'),
					'parent_item_colon' => __('Parent Service_card:', 'services-card-block'),
					'all_items' => __('All Service', 'services-card-block'),
					'archives' => __('Service_card Archives', 'services-card-block'),
					'attributes' => __('Service_card Attributes', 'services-card-block'),
					'insert_into_item' => __('Insert into Service_card', 'services-card-block'),
					'uploaded_to_this_item' => __('Uploaded to this Service_card', 'services-card-block'),
					'featured_image' => __('Featured Image', 'services-card-block'),
					'set_featured_image' => __('Set featured image', 'services-card-block'),
					'remove_featured_image' => __('Remove featured image', 'services-card-block'),
					'use_featured_image' => __('Use as featured image', 'services-card-block'),
					'menu_name' => __('Service Card', 'services-card-block'),
					'filter_items_list' => __('Filter Service_card list', 'services-card-block'),
					'filter_by_date' => __('Filter by date', 'services-card-block'),
					'items_list_navigation' => __('Service_card list navigation', 'services-card-block'),
					'items_list' => __('Service_card list', 'services-card-block'),
					'item_published' => __('Service_card published.', 'services-card-block'),
					'item_published_privately' => __('Service_card published privately.', 'services-card-block'),
					'item_reverted_to_draft' => __('Service_card reverted to draft.', 'services-card-block'),
					'item_scheduled' => __('Service_card scheduled.', 'services-card-block'),
					'item_updated' => __('Service_card updated.', 'services-card-block'),
					'item_link' => __('Service_card Link', 'services-card-block'),
					'item_link_description' => __('A link to an Service_card.', 'services-card-block'),
				],
				'public' => true, //frontend or backend show
				"publicly_queryable" => false, //view link hidden
				'show_ui' => true,  //admin show
				'show_in_menu' => true,
				'show_in_rest' => true,  //REST support
				'menu_position' => 79, //position type
				'menu_icon' => 'dashicons-admin-tools', //icon
				'supports' => array('title', 'editor', 'revisions'),
				'template' => [['services-card-block/services-cards']],  //open templated
				'template_lock' => 'all', //lock
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,

			]);

		}

	

		//column UI
		function q3q4_manage_cpt_columns($column_name, $post_id)
		{
			if ($column_name == 'shortcode') {
				echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[q3q4_service_card id=' . esc_attr($post_id) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">Copy To Clipboard</span>
					  </div>';
			}
			if ($column_name == 'publisher') {
				echo 'bplugins';
			}
		}

		// Shortcode

			function q3q4_service_card_block_shortcode($atts){
				
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

			function displayContent( $post ){
				$blocks = parse_blocks( $post->post_content );
				return render_block( $blocks[0] );
			}
				//custome column 
		function q3q4_cpt_callback($column)
		{
			unset($column['date']);
			$column['shortcode'] = 'ShortCode';
			$column['date'] = 'Date';
			$column['publisher'] = 'Publisher';
			return $column;
		}

		function q3q3_admin_menu_cb() {
        add_submenu_page(
        'edit.php?post_type=q3q4_service_card',
        'Service Card Settings',
        'settings',
        'manage_options',
        'q3q4_render_settings_page',
        [$this,"q3q4_render_settings_page"],
        90
    );
}
function q3q4_render_settings_page(){
	echo "Service Card Block Settings";
}

		//data enqueueshortcode
		function sc_admin_enqueue_script()
		{
			global $typenow;

			if ('q3q4_service_card' === $typenow) {
				wp_enqueue_script('shortcode-js', Q3Q4SCB_DIR_URL . './build/shortcode.js', [], Q3Q4SCB_VERSION, true);
				wp_enqueue_style('shortcode-css', Q3Q4SCB_DIR_URL . './build/shortcode.css',[],Q3Q4SCB_VERSION );

			}
		}
	}
	new Q3Q4SERVICECARDPLUGIN();
}

// Plugin activation + redirect logic
// Plugin activation + redirect logic
register_activation_hook( __FILE__, 'q3q4_plugin_activate' );
function q3q4_plugin_activate() {
    set_transient( '_q3q4_do_activation_redirect', true, 30 );
}

add_action( 'admin_init', 'q3q4_plugin_redirect' );
function q3q4_plugin_redirect() {
    if ( get_transient( '_q3q4_do_activation_redirect' ) ) {
        delete_transient( '_q3q4_do_activation_redirect' );

        // Skip redirect if multiple plugins activated
        if ( isset( $_GET['activate-multi'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
            return;
        }

        // Generate a nonce-protected URL for the settings page
        $redirect_url = wp_nonce_url(
            admin_url( 'edit.php?post_type=q3q4_service_card&page=q3q4_render_settings_page' ),
            'q3q4_settings_redirect'
        );

        wp_safe_redirect( $redirect_url );
        exit;
    }
}
