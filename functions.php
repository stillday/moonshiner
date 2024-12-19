<?php
function moonshiner_enqueue_scripts() {
    wp_enqueue_script(
        'moonshiner_react-app',
        get_template_directory_uri() . '/build/index.js',
        array('wp-element'), 
        '1.0.0',
        true
    );
    
    wp_enqueue_style(
        'moonshiner-style',
        get_template_directory_uri() . '/build/index.css',
        [],
        '1.0.0'
    );

    $current_user = wp_get_current_user();
    $user_name = $current_user->display_name;
    $user_avatar = get_avatar_url($current_user->ID);
    $roles = !empty($current_user->roles) && is_array($current_user->roles)
        ? $current_user->roles[0]
        : 'guest';

    wp_localize_script('moonshiner_react-app', 'wpApiSettings', [
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'context' => is_admin() ? 'dashboard' : 'site',
        'roles' => $roles,
        'user' => [
            'name' => $user_name,
            'avatar' => $user_avatar
        ],
    ]);
}

add_action('wp_enqueue_scripts', 'moonshiner_enqueue_scripts');
add_action('admin_enqueue_scripts', 'moonshiner_enqueue_scripts');

function moonshiner_redirect_dashboard() {
    global $pagenow;

    if ($pagenow === 'index.php' && current_user_can('read')) {
        wp_redirect(admin_url('admin.php?page=moonshiner-dashboard'));
        exit;
    }
}

add_action('admin_init', 'moonshiner_redirect_dashboard');

function moonshiner_add_custom_dashboard() {
    add_menu_page(
        'Moonshiner Dashboard',
        'Dashboard',
        'read',
        'moonshiner-dashboard',
        function() {
            echo '<div id="app" data-context="dashboard"></div>';
        },
        'dashicons-dashboard',
        2
    );
}

add_action('admin_menu', 'moonshiner_add_custom_dashboard');

add_action('admin_menu', function() {
    remove_menu_page('index.php');
});