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
 * Rewrite help link
 */
// var $help_link = $('.siteLinks div:nth-child(2n)');

// $help_link.html('<a href="http://www.library.arizona.edu/search-find/summon/help" class="help" title="Summon Help">Help</a>');

/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=122613-2">').appendTo( $('head') );

/**
 * Change width of right sidebar.
 */

console.log('height():'+$header.height());
console.log('css height:'+$header.css('height'));
console.log('alert banner display: '+$alert_banner.css('display'));
});

