$(document).ready(function() {
  $('<link rel="stylesheet" type="text/css" href="http://redbar.arizona.edu/sites/default/files/ua-banner/ua-web-branding/css/ua-web-branding.css">').appendTo( $('head') );

var $ua_banner = $('<div id="ua-web-branding-banner-v1" class="ua-wrapper bgDark dark-gray twenty-five">'+
  '<a class="ua-home asdf" href="http://arizona.edu" title="The University of Arizona">'+
    '<p>The University of Arizona</p>'+
  '</a>'+
'</div>');
$('.header').prepend($ua_banner);
  /** 
   * Insert a "Start Over" link before the chat link.
   */
  // Make a container.
  var $start_over_container = $('<div></div>')
    .addClass('ng-scope')
  ;
  // Create the link itself.
  var $start_over_link = $('<a id="start-over">Start Over</a>')
    .attr('href', 'http://arizona.summon.serialssolutions.com/')
    .attr('ng-click','advanced.clearForm()')
    .addClass('ng-scope ng-binding custom')
    //.attr('target', '_blank')
    .appendTo($start_over_container)
  ;
  // Insert the HTML.
  $start_over_container.insertBefore("div.chat");

  // $('#start-over').click(function(){
  //   $('.form-inline')[0].reset();
  //   $(':input','.form-inline')
  //    .not(':button, :submit, :reset, :hidden')
  //    .val('')
  //    .removeAttr('checked')
  //    .removeAttr('selected');
  // });

  /**
   * Change width of right sidebar.
   */
  $("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
  $("style").append("div.previewRightArrow {right: 350px;}");

  /**
  * Experimenting with writing styles to <head>
  */

  $('<link rel="stylesheet" href="https://rawgithub.com/liquid06/summon/master/ualibraries-custom.css">').appendTo( $('head') );
 
});
