/*global $,angular*/
$(document).ready(function() {

  /**
   * Summon search patch
   * We lose the search without this, and the Summon API crashes in Firefox after authentication.
   */
  $('.vpnBanner a').click(function(e) {
    if (window.location.hash.length) {
      e.preventDefault();
      var summonPath = window.location.hash.substring(1).replace(/^!/, '');
      summonPath = summonPath.replace('|', encodeURIComponent('|')); // fvf crashes the Summon API if there's a pipe in the Referer (Firefox only)
      var loginURL = 'http://ezproxy.library.arizona.edu/login?url=http://arizona.summon.serialssolutions.com' + summonPath;
      window.self.location = loginURL;
    }
  });

  /**
   * Write a link to our custom CSS file
   */
  $('<link rel="stylesheet" href="//www.library.arizona.edu/vendor-support/summon/dist/styles/ualibraries-custom.css?ver=1478041665">').appendTo( $('head') );

  /**
   * Add a link to Ask us on small screens
   */
  var askUsLink = angular.element('<div class="ask-us-container"><a href="http://new.library.arizona.edu/contact" target="_blank" class="ask-us">Ask us</a></div>');
  $('.content .holdingsOnlyToggle').after(askUsLink);
  
  /**
   * Display a tooltip when the chat button is hovered over
   */
  // We have to wait for the chat button to be added to the DOM
  setTimeout(function() {
    $('.libchat_online').after('<div class="tooltip bottom fade" style="top: 33px; left: -7px;"><div class="tooltip-arrow"></div><div class="tooltip-inner">Chat</div></div>');
    
    $('.libchat_online').hover(function () {
      $('.libchat_online').next('.tooltip').addClass('in');
    }, function() {
      $('.libchat_online').next('.tooltip').removeClass('in');
    });
  }, 2000);
  
}); // end $(document).ready(function(){});
