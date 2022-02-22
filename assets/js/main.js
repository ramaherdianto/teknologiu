// =========== Preloader
(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#loader").length) {
      $("#loader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
})(jQuery);

// Transition navbar
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".navbar").addClass("active");
    $(".navbar").addClass("shadow-sm");
  } else {
    $(".navbar").removeClass("active");
    $(".navbar").removeClass("shadow-sm");
  }
});
