<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Moonshiner React Dashboard</title>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div id="app"></div> <!-- React-container -->
        <?php wp_footer(); ?>
    </body>
</html>