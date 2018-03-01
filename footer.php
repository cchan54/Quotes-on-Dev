<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">

					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'primary',
							'menu_id' => 'primary-menu',
							'menu_class' => 'footer-navigation'
						)
						);
					
						?>
				</div><!-- .site-info -->

					<p>Brought to you by © <a href="http://www.cliffchan.ca">Cliff Chan</a> <?php echo date( 'Y' ) ?></p>

			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
