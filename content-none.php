<?php
/**
 * The template part for displaying a message that posts cannot be found.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package mmmtimber
 */

$context = mmmtimber_get_context();
Timber::render('views/content-none.twig', $context);

?>