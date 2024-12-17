<?php
function moonshiner_enqueue_script() {
    echo "Hallo Konsole!\n";
    // Javascript laden 
    wp_enqueue_script(
        'moonshiner_react-app',
        get_template_directory_uri() . '/build/index.js',
        array('wp-element'),
        '1.0.0',
        true
    );
    
    //css laden
    wp_enqueue_style(
        'moonshiner-style',
        get_stylesheet_uri() . '/build/style-index.css'
    );

    //later code
}

add_action('wp_enqueue_scripts', 'moonshiner_enqueue_scripts');