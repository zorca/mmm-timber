
var utils = ( function() {
	
	if( typeof $ != 'function' ) return;


	var utils =  {
		
		prefix: undefined,
		isRetina: undefined,
		sw: window.innerWidth,
		sh: window.innerHeight,
		isIE: false,
		transSupport: false,
		// elements
		solidOverlay: $('#overlay'),



		init: function() {

			// transition support
			//-----------------------------------
			if( 'WebkitTransition' in document.body.style ||
			    'MozTransition' in document.body.style ||
			    'OTransition' in document.body.style ||
			    'transition' in document.body.style
			){
			  	this.transSupport = true;
			}
			
			// check IE
			//-----------------------------------
			var ua = window.navigator.userAgent;
			var msie = ua.indexOf("MSIE ");
			var isAtLeastIE11 = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));
			this.isIE = false;
			if( msie > 0 || isAtLeastIE11 ){
				this.isIE = true;
				$('body').addClass('isIE'); 
			}
			
			// browser prefix
			//-----------------------------------
			this.prefix = (function () {
				var styles = window.getComputedStyle(document.documentElement, ''),
			    	pre    = (Array.prototype.slice
							.call(styles)
			      			.join('') 
			      			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			    			)[1],
			    	dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
			  		return {
			    		dom: dom,
			    		lowercase: pre,
			    		css: '-' + pre + '-',
			    		js: pre[0].toUpperCase() + pre.substr(1)
			  		};
			})();
			
			// retina
			//-----------------------------------
			this.isRetina = (function () {
			    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5),\
			            (min--moz-device-pixel-ratio: 1.5),\
			            (-o-min-device-pixel-ratio: 3/2),\
			            (min-resolution: 1.5dppx)';
			    if (window.devicePixelRatio >= 2 )
			        return true;
			    if (window.matchMedia && window.matchMedia(mediaQuery).matches)
			        return true;
			    return false;
			})();
		},
		toggleOverlay: function( __toggle ) {
			
			if( __toggle == 'show' ) {
				
				//utils.solidOverlay.css('visibility', 'visible');
				//TweenMax.to( utils.solidOverlay, 0.35, { opacity: 0.9, ease: Sine.easeInOut, overwrite: 1 });
				utils.solidOverlay.addClass('in').removeClass('out').removeClass('default');
				
			}else{
				
				//TweenMax.to( utils.solidOverlay, 0.35, { opacity: 0, ease: Sine.easeInOut, overwrite: 1 });
				utils.solidOverlay.addClass('out');
				
				setTimeout( function() { 
					
					utils.solidOverlay.addClass('default').removeClass('in').removeClass('out');
					
				//	utils.solidOverlay.css('visibility', 'hidden'); 
				//	utils.solidOverlay.removeClass('out').removeClass('in');

				}, 800 );
			}
		},
		getQueryString: function( __field, __url ) {
			
		    var href   = __url ? __url : window.location.href;
		    var reg    = new RegExp( '[?&]' + __field + '=([^&#]*)', 'i' );
		    var string = reg.exec(href);
		
		    return string ? string[1] : null;
		},
		getTransformProperty: function( __element ) {

		    var properties = [
		        'transform',
		        'WebkitTransform',
		        'msTransform',
		        'MozTransform',
		        'OTransform'
		    ];
		    var p;
		    while( p = properties.shift() ) {
		        if( typeof __element.style[p] != 'undefined' ) {
		            return p;
		        }
		    }
		    return false;
		},
		isTouch: function() {
			
			var Environment = {
			    //mobile or desktop compatible event name, to be used with '.on' function
			    TOUCH_DOWN_EVENT_NAME: 'mousedown touchstart',
			    TOUCH_UP_EVENT_NAME: 'mouseup touchend',
			    TOUCH_MOVE_EVENT_NAME: 'mousemove touchmove',
			    TOUCH_DOUBLE_TAB_EVENT_NAME: 'dblclick dbltap',

			    isAndroid: function() {
			        return navigator.userAgent.match(/Android/i);
			    },
			    isBlackBerry: function() {
			        return navigator.userAgent.match(/BlackBerry/i);
			    },
			    isIOS: function() {
			        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			    },
			    isOpera: function() {
			        return navigator.userAgent.match(/Opera Mini/i);
			    },
			    isWindows: function() {
			        return navigator.userAgent.match(/IEMobile/i);
			    },
			    isMobile: function() {
			        return (Environment.isAndroid() || Environment.isBlackBerry() || Environment.isIOS() || Environment.isOpera() || Environment.isWindows());
			    }
			};
			
			( Environment.isMobile() ) ? $('body').addClass('istouch') : $('body').addClass('notouch');

			return ( Environment.isMobile() ) ? isTouch = true : isTouch = false;
		},
		removeDoubleClick: function( __el ) {
			
			if( __el.data('disabled') == 'true' ) return false;

			__el.data("disabled", "true");
			window.setTimeout(function(event){
				__el.data("disabled", "false");
			}, 1000 );

			return true;
		},
		setToTallest: function( __container ) {
			
			var currentTallest  = 0,
				divs			= [],
			    $el			 	= undefined;
			
			$(__container).each(function() {
				divs.push( $(this).height() );
			});
			
			var largest = Math.max.apply(Math, divs);
			
			//$(__container).height(largest);
		},
		// needs to be tested
		equalRowHeights: function( __container ) {
			
			var currentTallest  = 0,
			    currentRowStart = 0,
			    rowDivs 		= new Array(),
			    $el			 	= undefined,
			    topPosition 	= 0;
			
			 $(__container).each(function() {
				
			 	$el 		= $(this);
			   	topPostion  = $el.position().top;
			
			   	if( currentRowStart != topPostion ) {
					// new row, set heights
			    	for( currentDiv = 0, len = rowDivs.length; currentDiv < len; currentDiv++ ) {
			       		rowDivs[currentDiv].height(currentTallest);
			     	}
					// mew row vars
			    	rowDivs.length  = 0; // empty the array
			     	currentRowStart = topPostion;
			     	currentTallest  = $el.height();
			     	rowDivs.push($el);
			
				}else{
					// another element on the current row. Add it to the list and check if it's taller
			   		rowDivs.push($el);
			     	currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			  	}
				// last row
			 	for( currentDiv = 0, len = rowDivs.length; currentDiv < len; currentDiv++ ) {
			    	rowDivs[currentDiv].height(currentTallest);
			 	}
			 });
		}
	}
	
	utils.init();
	
	return utils;
	
})();