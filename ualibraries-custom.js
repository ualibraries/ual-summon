$(document).ready(function() {

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


// $header.css('min-height',$header_height);
// $adv_search_form.css('top',$header_height);
// $main.css('padding-top',$header_height);

// $('<style>'+
//   '.fixed.fullDialog{top:' + $header_height + 'px !important;}'+
//   '#main{padding-top:' + $header_height + 'px !important;}'+
//   '</style>'
//   ).appendTo( $('head') );
/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=120413-12">').appendTo( $('head') );

/**
 * Change width of right sidebar.
 */
// $("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
// $("style").append("div.previewRightArrow {right: 350px;}");
 
console.log('height():'+$header.height());
console.log('css height:'+$header.css('height'));
console.log('alert banner display: '+$alert_banner.css('display'));
});