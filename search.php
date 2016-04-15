<?php
/**
 * The template for displaying Search Results pages.
 *
 * @package mmtimber
 */

$context = mmmtimber_get_context();

$context['posts'] = Timber::get_posts();

mmmtimber_render_page('views/search.twig', $context);

?>