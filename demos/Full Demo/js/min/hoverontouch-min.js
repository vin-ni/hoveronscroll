function HoverOnTouch(){this.init(),this.rewriteLinks(),this.touchEvents()}function resetGif(t){var e=t,o=e.src;e.src="#",e.src=o}function restartImagesIfGif(t){for(var e=t.length-1;e>=0;e--){var o=t[e].src.split(".").pop();"gif"===o&&resetGif(t[e])}}HoverOnTouch.prototype.init=function(){this.all_objects=document.getElementsByClassName("hoverontouch"),this.pressTimer,this.longpress=!1,this.scrollStartX=0,this.scrollStartY=0},HoverOnTouch.prototype.rewriteLinks=function(){console.log("rewriteLinks");for(var t=0;t<this.all_objects.length;t++)if(object=this.all_objects[t],"A"===object.tagName){var e=object.getAttribute("href");e&&(object.setAttribute("data-link",e),object.removeAttribute("href"))}},HoverOnTouch.prototype.touchEvents=function(){var t=this;this.handlerMouseenterHoverontouch=this.mouseenterHoverontouch.bind(this),this.handlerMouseeoutHoverontouch=this.mouseeoutHoverontouch.bind(this),this.handlerTouchstartHoverontouch=this.touchstartHoverontouch.bind(this),this.handlerTouchendHoverontouch=this.touchendHoverontouch.bind(this);for(var e=0;e<this.all_objects.length;e++){var o=this.all_objects[e];o.img="toto",o.addEventListener("mouseenter",this.handlerMouseenterHoverontouch),o.addEventListener("mouseout",this.handlerMouseeoutHoverontouch),o.addEventListener("touchstart",this.handlerTouchstartHoverontouch),o.addEventListener("touchend",this.handlerTouchendHoverontouch)}},HoverOnTouch.prototype.mouseenterHoverontouch=function(t){t.target.className+=" hoverontouch--aktiv",console.log(t),console.log(this)},HoverOnTouch.prototype.mouseeoutHoverontouch=function(t){t.target.classList.remove("hoverontouch--aktiv")},HoverOnTouch.prototype.touchstartHoverontouch=function(t){console.log("touchstart"),t.target.className+=" hoverontouch--aktiv",this.scrollStartX=event.pageX,this.scrollStartY=event.pageY;var e=this;this.pressTimer=window.setTimeout(function(){console.log("timer end, longpress detected"),e.longpress=!0},250)},HoverOnTouch.prototype.touchendHoverontouch=function(t){if(console.log("touchend"),t.target.classList.remove("hoverontouch--aktiv"),clearTimeout(this.pressTimer),this.longpress)console.log("this was longpress"),this.longpress=!1;else{var e=this.scrollStartX,o=event.pageX,r=Math.abs(e-o),s=event.pageY,n=this.scrollStartY,i=Math.abs(n-s);if(this.getAttribute("data-link")&&i<=5&&r<=5){var h=this.getAttribute("data-link");window.location.href=h,console.log("run redirect")}}event.preventDefault()},HoverOnTouch.prototype.destroy=function(){for(var t=0;t<this.all_objects.length;t++){var e=this.all_objects[t];e.removeEventListener("mouseenter",this.mouseenterHoverontouch),e.removeEventListener("mouseout",this.mouseeoutHoverontouch),e.removeEventListener("touchstart",this.touchstartHoverontouch),e.removeEventListener("touchend",this.touchendHoverontouch)}console.log("removed all listeners"),console.log(this)},HoverOnTouch.prototype.reparseLinks=function(){},HoverOnTouch.prototype.reparseGifs=function(){},window.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1};var getClosest=function(t,e){for(var o=e.charAt(0);t&&t!==document;t=t.parentNode){if("."===o&&t.classList.contains(e.substr(1)))return t;if("#"===o&&t.id===e.substr(1))return t;if("["===o&&t.hasAttribute(e.substr(1,e.length-2)))return t;if(t.tagName.toLowerCase()===e)return t}return!1};