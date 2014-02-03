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
$('<div class="feedback-link" style="position: fixed; right: 10px; bottom: 30px;"><a href="#">Feedback</a></div>').appendTo($header);
/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=020314-1">').appendTo( $('head') );
});

