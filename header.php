<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package mmmtimber
 */

$context = mmmtimber_get_context();

Timber::render('views/header.twig', $context);

?>