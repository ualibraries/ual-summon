$(document).ready(function() {

  $("div.Logo[size='small'] img").css('cursor', 'pointer').attr('title', 'UA Libraries homepage').attr('alt', 'UA Libraries homepage');

  $("div.Logo[size='small'] img").click(function() {
    window.location.href = 'http://www.library.arizona.edu';
  });
    
  var text_to_insert = '<div class="ng-scope" dynamic-link="" ng-repeat="link in links.links" no-ellipsis="true" link-class="custom" is-internal="false" link="http://arizona.summon.serialssolutions.com/" click="link.click(link.type)" text="."><!-- ngSwitchWhen: true --><!-- ngSwitchDefault:  --><a href="http://arizona.summon.serialssolutions.com/" class="ng-scope ng-binding custom" ellipsis="" ng-switch-default="" ng-class="linkClass" ng-href="http://arizona.summon.serialssolutions.com/" target="_blank" ng-bind-html-unsafe="text"> Start Over </a></div>';
        
  $("style").append("div.rightBar {width: 350px; max-width: 350px; min-width: 350px;}");
  $("style").append("div.previewRightArrow {right: 350px;}");
 
  //var topic_link_to_insert = '<!-- GRW --> | <a class="sourceLink customPrimaryLie?<';
  $(text_to_insert).insertBefore("div.chat");

});
