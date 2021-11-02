$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var fadeins = $(".fadein");

  for (var i = 0; i < fadeins.length; i++) {
    var fadein = fadeins[i];

    if ($(fadein).position().top < pageBottom) {
      $(fadein).addClass("visible");
    } else {
      $(fadein).removeClass("visible");
    }
  }
});
