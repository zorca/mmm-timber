<?php get_header('basic'); ?>

	<div id="main" class="site-main default-template udpate-browser" role="main">
	
			<?php while ( have_posts() ) : the_post(); ?>
			
				<?php 
					$content = get_the_content(); 
					echo $content;
				?>
				
			<?php endwhile; ?>

	</div>

<?php get_footer('basic'); ?>
