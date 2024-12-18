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

    wp_localize_script('moonshiner_react-app', 'wpApiSettings', [
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
    ]);
}

add_action('wp_enqueue_scripts', 'moonshiner_enqueue_scripts');
