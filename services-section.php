<?php
/**
 * Plugin Name: Services Section 
 * Description:  A service card block with multiple themes with easy to use interface.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: q3q4
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'PREFIX_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'PREFIX_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'PREFIX_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'PREFIXPlugin' ) ){
	class PREFIXPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
			add_filter('manage_q3q4_service_card_posts_columns', [$this, 'sc_setCustomColumn_edit']);
			add_action('manage_q3q4_service_card_posts_custom_column', [$this, 'sc_manageCustomColumn'], 10, 2);
		    add_shortcode('service_card', [$this, 'service_card_shortcode']);
			add_action('admin_enqueue_scripts', [$this, 'sc_admin_enqueue_script']);
	
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );

				register_post_type('q3q4_service_card', [
				'label' => 'Service card',
				'description' => 'this is Service_card and seo friendly card',
				'labels' => [
					'name' => __('Service_card', 'service-card'),
					'singular_name' => __('Service_card', 'service-card'),
					'add_new' => __('Add New', 'service-card'),
					'add_new_item' => __('Add New Service_card', 'service-card'),
					'edit_item' => __('Edit Service_card', 'service-card'),
					'new_item' => __('New Service_card', 'service-card'),
					'view_item' => __('View Service_card', 'service-card'),
					'view_items' => __('View Service_card', 'service-card'),
					'search_items' => __('Search Service_card', 'service-card'),
					'not_found' => __('No Service_card found.', 'service-card'),
					'not_found_in_trash' => __('No Service_card found in Trash.', 'service-card'),
					'parent_item_colon' => __('Parent Service_card:', 'service-card'),
					'all_items' => __('All Service_card', 'service-card'),
					'archives' => __('Service_card Archives', 'service-card'),
					'attributes' => __('Service_card Attributes', 'service-card'),
					'insert_into_item' => __('Insert into Service_card', 'service-card'),
					'uploaded_to_this_item' => __('Uploaded to this Service_card', 'service-card'),
					'featured_image' => __('Featured Image', 'service-card'),
					'set_featured_image' => __('Set featured image', 'service-card'),
					'remove_featured_image' => __('Remove featured image', 'service-card'),
					'use_featured_image' => __('Use as featured image', 'service-card'),
					'menu_name' => __('Service Card', 'service-card'),
					'filter_items_list' => __('Filter Service_card list', 'service-card'),
					'filter_by_date' => __('Filter by date', 'service-card'),
					'items_list_navigation' => __('Service_card list navigation', 'service-card'),
					'items_list' => __('Service_card list', 'service-card'),
					'item_published' => __('Service_card published.', 'service-card'),
					'item_published_privately' => __('Service_card published privately.', 'service-card'),
					'item_reverted_to_draft' => __('Service_card reverted to draft.', 'service-card'),
					'item_scheduled' => __('Service_card scheduled.', 'service-card'),
					'item_updated' => __('Service_card updated.', 'service-card'),
					'item_link' => __('Service_card Link', 'service-card'),
					'item_link_description' => __('A link to an Service_card.', 'service-card'),
				],
				'public' => true, //frontend or backend show
				"publicly_queryable" => false, //view link hidden
				'show_ui' => true,  //admin show
				'show_in_menu' => true,
				'show_in_rest' => true,  //REST support
				'menu_position' => 79, //position type
				'menu_icon' => 'dashicons-index-card', //icon
				'supports' => array('title', 'editor', 'revisions'),
				'template' => [['q3q4/services-cards']],  //open templated
				'template_lock' => 'all', //lock
				'show_in_nav_menus' => true,
				'show_in_admin_bar' => true,

			]);

		}

		//custome column 
		function sc_setCustomColumn_edit($column)
		{
			unset($column['date']);
			$column['shortcode'] = 'ShortCode';
			$column['date'] = 'Date';
			$column['publisher'] = 'Publisher';
			return $column;
		}

		//column UI
		function sc_manageCustomColumn($column_name, $post_id)
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
		function service_card_shortcode($atts)
		{
			$post_id = $atts['id'];
			$post = get_post($post_id);

			if (!$post) {
				return '';
			}

			if (post_password_required($post)) {
				return get_the_password_form($post);
			}

			switch ($post->post_status) {
				case 'publish':
					return $this->displayContent($post);

				case 'private':
					if (current_user_can('read_private_posts')) {
						return $this->displayContent($post);
					}
					return '';

				case 'draft':
				case 'pending':
				case 'future':
					if (current_user_can('edit_post', $post_id)) {
						return $this->displayContent($post);
					}
					return '';

				default:
					return '';
			}
		}
		function displayContent($post)
		{
			$blocks = parse_blocks($post->post_content);
			return render_block($blocks[0]);
		}

		//data enqueueshortcode
		function sc_admin_enqueue_script()
		{
			global $typenow;

			if ('q3q4_service_card' === $typenow) {
				wp_enqueue_script('shortcode-js', PREFIX_DIR_URL . './build/shortcode.js', [], PREFIX_VERSION, true);
				wp_enqueue_style('shortcode-css', PREFIX_DIR_URL . './build/shortcode.css', PREFIX_VERSION);

			}
		}
	}
	new PREFIXPlugin();
}