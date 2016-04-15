<?php
/**
 * The Template for displaying all single posts.
 *
 * @package mmmtimber
 */

$context = mmmtimber_get_context();

$context['posts'] = Timber::get_posts();
$context['sidebar'] = Timber::get_sidebar();

mmmtimber_render_page('views/single.twig', $context);

?>