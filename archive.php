<?php
/**
 * The template for displaying Archive pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package mmmtimber
 */

$context = mmmtimber_get_context();

$context['posts'] = Timber::get_posts();
$context['sidebar'] = Timber::get_sidebar();

mmmtimber_render_page('views/archive.twig', $context);