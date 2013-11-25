$(document).ready(function() {

  /** 
   * Insert a "Start Over" link before the chat link.
   */
  // Make a container.
  var $start_over_container = $('<div></div>')
    .addClass('ng-scope')
  ;
  // Create the link itself.
  var $start_over_link = $('<a>Start Over</a>')
    .attr('href', 'http://arizona.summon.serialssolutions.com/')
    .addClass('ng-scope ng-binding custom')
    //.attr('target', '_blank')
    .appendTo($start_over_container)
  ;
  // Insert the HTML.
  $start_over_container.insertBefore("div.chat");

  /**
   * Change width of right sidebar.
   */
  $("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
  $("style").append("div.previewRightArrow {right: 350px;}");

  /**
  * Experimenting with writing styles to <head>
  */
  $('<style type="text/css">'+
    'body{'+
      'background:cornflowerblue;'+
      'text-align:center;'+
    '}'+
    '.one{'+
      'width:100px;'+
      'height:100px;'+
      'margin:20px auto;'+
      'background:goldenrod;'+
      'padding:10px;'+
      'text-align:center;'+
    '}'+
  '</style>').appendTo($('head'));
 
});
