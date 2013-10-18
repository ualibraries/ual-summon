$(document).ready(function() {

  var text_to_insert = '<div class="ng-scope" dynamic-link="" ng-repeat="link in links.links" no-ellipsis="true" link-class="custom" is-internal="false" link="http://arizona.summon.serialssolutions.com/" click="link.click(link.type)" text="."><!-- ngSwitchWhen: true --><!-- ngSwitchDefault:  --><a href="http://arizona.summon.serialssolutions.com/" class="ng-scope ng-binding custom" ellipsis="" ng-switch-default="" ng-class="linkClass" ng-href="http://arizona.summon.serialssolutions.com/" target="_blank" ng-bind-html-unsafe="text"> Start Over </a></div>';
        
  var $start_over_container = $('<div></div>')
    .addClass('ng-scope')
  ;
  
  var $start_over_link = $('<a>Start Over</a>')
    .attr('href', 'http://arizona.summon.serialssolutions.com/')
    .addClass('ng-scope ng-binding custom')
    //.attr('target', '_blank')
    .appendTo($start_over_container)
  ;
  
  $("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
  $("style").append("div.previewRightArrow {right: 350px;}");
 
  //var topic_link_to_insert = '<!-- GRW --> | <a class="sourceLink customPrimaryLie?<';
  $start_over_container.insertBefore("div.chat");

});
