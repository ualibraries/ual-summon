$(document).ready(function() {

   /**
    * Summon search patch
    * The Angular #! URLs don't get passed to EZProxy. So intercept the click,
    * parse the hash portion, and redirect to the proxied, non-hash URL.
    */
   $('.vpnBanner a').click(function(e) {
      if (window.location.hash.length) {
         e.preventDefault();
         var summonPath = window.location.hash.substring(1).replace(/^!/, "");
         summonPath = summonPath.replace('|', encodeURIComponent('|')); // fvf crashes the Summon API if there's a pipe in the Referer (Firefox only)
         var loginURL = 'http://ezproxy.library.arizona.edu/login?url=http://arizona.summon.serialssolutions.com' + summonPath;
         console.log("Login URL: " + loginURL);
         window.self.location = loginURL;
      }
   });
/**
 * Rewrite meta viewport tag so screeen is zoomed out on mobile
 */
(function (){
  var hasTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
  if( $(window).width() <= 768 && hasTouch ){
    var viewport = $("meta[name=viewport]");
    viewport.attr('content', 'width=1000');
    document.documentElement.className += ' touch';
  }
})();

/**
 * UA Banner styles and markup
 */

var $alert_banner = $('.vpnBanner.customAuthBanner');
var $ua_banner = $('<div id="ua-web-branding-banner-v1" class="ua-wrapper bgDark dark-gray twenty-five">'+
  '<a class="ua-home asdf" href="http://arizona.edu" title="The University of Arizona">'+
    '<p>The University of Arizona</p>'+
  '</a>'+
'</div>');

$alert_banner.after($ua_banner);

var $adv_search_form = $('.fixed.fullDialog.advancedSearchDialog');

if($alert_banner.css('display') == 'block'){
  $('body').addClass('off-campus-alert');
}
/**
 * Add a feedback link
 */
$('<a class="feedback-link" style="display: block; position: fixed; right: 20px; bottom: 20px;" href="http://www.library.arizona.edu/summon-feedback">Submit Feedback</a>').appendTo('body');
/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=020414-8">').appendTo( $('head') );
});

/**
 * Mini modernizr to detect SVG support:
 * 
 * Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-cssclasses
 */
;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect},n.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==m.svg};for(var A in n)u(n,A)&&(s=A.toLowerCase(),e[s]=n[A](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
