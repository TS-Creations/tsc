//include
$(document).ready(function(){
  $('#includehead').load("head.html");
  $('#includenav').load("nav.html");
  $('#includefoot').load("foot.html");
});

//nav include sub
$(function () {
  $("#includenavsub").load("sub/nav.html");
});

//include head sub
$(function () {
  $("#includeheadsub").load("sub/head.html");
});

//include foot sub
$(function () {
  $("#includefootsub").load("sub/foot.html");
});