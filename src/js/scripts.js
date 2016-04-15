/**
 * scripts.js
 *
 */

//Pace.on('done', function() {

if( typeof $ == 'function' ) {

	//$(document).ready(function() {
	$(window).bind('load', function() {
	
		/*-----------------------------------
			FIX WP ADMIN BAR
		-----------------------------------*/
		if( $('#wpadminbar').length != 0 ) {
	
			var adminTabCount = 0;
			$('html').attr('style', 'margin-top: 0px !important'); 
			$('#wpadminbar').append('<div id="admin-tab">Admin Bar</div>');
			$('#wpadminbar #admin-tab').on( 'click', function( event ) {
	
				if( adminTabCount % 2 == 0 ) {
	
					$('#wpadminbar').addClass('active').removeClass('inactive');
					$('#admin-tab').text('Close');
	
				}else{
	
					$('#wpadminbar').addClass('inactive').removeClass('active');
					$('#admin-tab').text('Admin Bar');
				}  
	
				adminTabCount++;
			});
			$('#wpadminbar').addClass('inactive').removeClass('active');
		}
	
		
		
		/*-----------------------------------
			INIT CLASSES
		-----------------------------------*/
		
		new FastClick(document.body);
		
		
	});
}
