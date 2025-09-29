<?php

if ( !defined( ABSPATH ) ) {
    exit;
}

if ( !class_exists( 'SCBADMINMENU' ) ) {
    class SCBADMINMENU {
        public function __construct() {
            add_action( 'admin_enqueue_scripts', [ $this, 'adminEnqueueScripts' ] );
            add_action( 'admin_menu', [ $this, 'q3q4_add_demo_submenu' ] );
        }

        function q3q4_add_demo_submenu() {
            add_submenu_page(
                'edit.php?post_type=services_card',
                'Demo and Help',
                'Demo & Help',
                'manage_options',
                'demo_page',
                [ $this, 'q3q4_render_demo_page' ]
            );
        }

        public function adminEnqueueScripts( $screen ): void {
            global $typenow;

            if ( 'services_card' === $typenow ) {

                wp_enqueue_script( 'admin-post-js', Q3Q4SCB_DIR_URL . 'build/admin-post.js', [], Q3Q4SCB_VERSION, true );
                wp_enqueue_style( 'admin-post-css', Q3Q4SCB_DIR_URL . 'build/admin-post.css', [], Q3Q4SCB_VERSION );

                if ( $screen === 'services_card_page_demo_page' ) {
                    wp_enqueue_script( 'bpl-admin-dashboard-js', Q3Q4SCB_DIR_URL . 'build/admin-dashboard.js', [ 'react', 'react-dom' ], Q3Q4SCB_VERSION, true );
                    wp_enqueue_style( 'bpl-admin-dashboard-css', Q3Q4SCB_DIR_URL . 'build/admin-dashboard.css', [], Q3Q4SCB_VERSION );
                }

            }
        }

    }

    new SCBADMINMENU();
}

?>