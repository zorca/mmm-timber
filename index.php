<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package mmmtimber
 */

$context = mmmtimber_get_context();

$context['posts'] = Timber::get_posts();
$context['sidebar'] = Timber::get_sidebar();

mmmtimber_render_page('views/index.twig', $context);