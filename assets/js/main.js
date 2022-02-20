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
