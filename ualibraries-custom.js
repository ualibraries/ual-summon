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
         var loginURL = 'http://ezproxy.library.arizona.edu/login?url=http://arizona.summon.serialssolutions.com' + summonPath;
         window.self.location = loginURL;
      }
   });
/**
 * Rewrite meta viewport tag so screeen is zoomed out on mobile
 */
(function (){
  var viewport = $("meta[name=viewport]");
  viewport.attr('content', 'width=1000');
  var hasTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
  if( $(window).width() <= 768 && hasTouch ){
    document.documentElement.className += ' touch';
    $('#main').css('padding-top','0');
    $('.header').css('position','relative');
  }
})();

/**
 * UA Banner styles and markup
 */
var $header = $('.header');
var $alert_banner = $('.vpnBanner.customAuthBanner');
var $ua_banner = $('<div id="ua-web-branding-banner-v1" class="ua-wrapper bgDark dark-gray twenty-five">'+
  '<a class="ua-home asdf" href="http://arizona.edu" title="The University of Arizona">'+
    '<p>The University of Arizona</p>'+
  '</a>'+
'</div>');

$alert_banner.after($ua_banner);

var $header_height = $header.height();
var $adv_search_form = $('.fixed.fullDialog.advancedSearchDialog');
var $main = $('#main');

if($alert_banner.css('display') == 'block'){
  $('body').addClass('off-campus-alert');
}
/**
 * Add a feedback link
 */
$('<a class="feedback-link" style="display: block; position: fixed; right: 20px; bottom: 20px;" href="#">Submit Feedback</a>').appendTo('body');
/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=020414-5">').appendTo( $('head') );
});

