//nav include
$(function () {
  $("#includenav").load("nav.html");
});

$(document).ready(function(){
  $('#head').load("head.html");
  $('#foot').load("foot.html");
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