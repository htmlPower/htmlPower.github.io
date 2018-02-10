$(window).load(function() {
  $('#before-load').find('.loader').fadeOut().end().delay(300).fadeOut('slow');
});
$(function(){$(window).scroll(function()
  {0!=$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function()
  {$("body,html").animate({scrollTop:0},800)}),
  $(function(){function a(a,n){a.each(function(){var a=$(this),t=a.attr("data-os-animation"),o=a.attr("data-os-animation-delay");
a.css({"-webkit-animation-delay":o,"-moz-animation-delay":o,"animation-delay":o}),(n||a).waypoint(function(){a.addClass("animated").addClass(t)},{triggerOnce:!0,offset:"90%"})})}a($(".os-animation")),a($(".staggered-animation"),$(".staggered-animation-container"))})});
