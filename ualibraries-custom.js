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

/**
* Write a link to our custom CSS file
*/
$('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css?ver=120313">').appendTo( $('head') );

/**
 * Change width of right sidebar.
 */
$("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
$("style").append("div.previewRightArrow {right: 350px;}");
 
});