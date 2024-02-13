<?php

function tutorial_theme_support()
{
    add_theme_support("title-tag");
    add_theme_support("custom-logo");
    add_theme_support("post-thumbnails");
}

function tutorial_register_styles()
{
    $version = wp_get_theme()->get("Version");

    wp_enqueue_style(
        "main",
        get_template_directory_uri() . "/assets/css/style.css",
        [],
        $version,
    );
}

function tutorial_register_scripts()
{
    $version = wp_get_theme()->get("Version");

    wp_enqueue_script(
        "main",
        get_template_directory_uri() . "/assets/js/index.js",
        [],
        $version,
    );
}

add_action("init", "tutorial_theme_support");
add_action("wp_enqueue_scripts", "tutorial_register_styles");
add_action("wp_enqueue_scripts", "tutorial_register_scripts");
