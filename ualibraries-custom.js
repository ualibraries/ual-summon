$(document).ready(function() {

/**
 * UA Banner styles and markup
 */

var $ua_banner = $('<div id="ua-web-branding-banner-v1" class="ua-wrapper bgDark dark-gray twenty-five">'+
  '<a class="ua-home asdf" href="http://arizona.edu" title="The University of Arizona">'+
    '<p>The University of Arizona</p>'+
  '</a>'+
'</div>');
$('.header').prepend($ua_banner);

var $header = $('.header');
var $header_height = $header.css('height');
// var $adv_search_form = $('.fixed.fullDialog.advancedSearchDialog');
// var $main = $('#main');
// $header.css('min-height',$header_height);
// $adv_search_form.css('top',$header_height);
// $main.css('padding-top',$header_height);
$('<style>'+
  '.fixed.fullDialog.advancedSearchDialog{top:' + $header_height + ' !important;}'+
  '#main{padding-top:' + $header_height + ' !important;}'+
  '</style>'
  ).appendTo( $('head') );
/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=120413">').appendTo( $('head') );

/**
 * Change width of right sidebar.
 */
// $("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
// $("style").append("div.previewRightArrow {right: 350px;}");
 
});