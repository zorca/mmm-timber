<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package mmmtimber
 */

$context = mmmtimber_get_context();

Timber::render('views/footer.twig', $context);

?>