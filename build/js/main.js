var utils=function(){if("function"==typeof $){var i={prefix:void 0,isRetina:void 0,sw:window.innerWidth,sh:window.innerHeight,isIE:!1,transSupport:!1,solidOverlay:$("#overlay"),init:function(){("WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"OTransition"in document.body.style||"transition"in document.body.style)&&(this.transSupport=!0);var i=window.navigator.userAgent,t=i.indexOf("MSIE "),e=!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/));this.isIE=!1,(t>0||e)&&(this.isIE=!0,$("body").addClass("isIE")),this.prefix=function(){var i=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(i).join("").match(/-(moz|webkit|ms)-/)||""===i.OLink&&["","o"])[1],e="WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1];return{dom:e,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}(),this.isRetina=function(){var i="(-webkit-min-device-pixel-ratio: 1.5),			            (min--moz-device-pixel-ratio: 1.5),			            (-o-min-device-pixel-ratio: 3/2),			            (min-resolution: 1.5dppx)";return window.devicePixelRatio>=2?!0:window.matchMedia&&window.matchMedia(i).matches?!0:!1}()},toggleOverlay:function(t){"show"==t?i.solidOverlay.addClass("in").removeClass("out").removeClass("default"):(i.solidOverlay.addClass("out"),setTimeout(function(){i.solidOverlay.addClass("default").removeClass("in").removeClass("out")},800))},getQueryString:function(i,t){var e=t?t:window.location.href,n=new RegExp("[?&]"+i+"=([^&#]*)","i"),o=n.exec(e);return o?o[1]:null},getTransformProperty:function(i){for(var t,e=["transform","WebkitTransform","msTransform","MozTransform","OTransform"];t=e.shift();)if("undefined"!=typeof i.style[t])return t;return!1},isTouch:function(){var i={TOUCH_DOWN_EVENT_NAME:"mousedown touchstart",TOUCH_UP_EVENT_NAME:"mouseup touchend",TOUCH_MOVE_EVENT_NAME:"mousemove touchmove",TOUCH_DOUBLE_TAB_EVENT_NAME:"dblclick dbltap",isAndroid:function(){return navigator.userAgent.match(/Android/i)},isBlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},isIOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},isOpera:function(){return navigator.userAgent.match(/Opera Mini/i)},isWindows:function(){return navigator.userAgent.match(/IEMobile/i)},isMobile:function(){return i.isAndroid()||i.isBlackBerry()||i.isIOS()||i.isOpera()||i.isWindows()}};return i.isMobile()?$("body").addClass("istouch"):$("body").addClass("notouch"),i.isMobile()?isTouch=!0:isTouch=!1},removeDoubleClick:function(i){return"true"==i.data("disabled")?!1:(i.data("disabled","true"),window.setTimeout(function(t){i.data("disabled","false")},1e3),!0)},setToTallest:function(i){var t=[];$(i).each(function(){t.push($(this).height())});Math.max.apply(Math,t)},equalRowHeights:function(i){var t=0,e=0,n=new Array,o=void 0;$(i).each(function(){if(o=$(this),topPostion=o.position().top,e!=topPostion){for(currentDiv=0,len=n.length;currentDiv<len;currentDiv++)n[currentDiv].height(t);n.length=0,e=topPostion,t=o.height(),n.push(o)}else n.push(o),t=t<o.height()?o.height():t;for(currentDiv=0,len=n.length;currentDiv<len;currentDiv++)n[currentDiv].height(t)})}};return i.init(),i}}();"function"==typeof $&&$(window).bind("load",function(){if(0!=$("#wpadminbar").length){var i=0;$("html").attr("style","margin-top: 0px !important"),$("#wpadminbar").append('<div id="admin-tab">Admin Bar</div>'),$("#wpadminbar #admin-tab").on("click",function(t){i%2==0?($("#wpadminbar").addClass("active").removeClass("inactive"),$("#admin-tab").text("Close")):($("#wpadminbar").addClass("inactive").removeClass("active"),$("#admin-tab").text("Admin Bar")),i++}),$("#wpadminbar").addClass("inactive").removeClass("active")}new FastClick(document.body)});