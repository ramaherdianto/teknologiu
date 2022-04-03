// =========== Preloader
(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
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

// Function ContactForm
const scriptURL = "https://script.google.com/macros/s/AKfycby6yqBLRi8c7ePJRyjCMD44_PHUinwD5FucICOpsh2E-wgcF3DzRHSuhpV0fqlb-rYXgA/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit di klik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Tahun Copyright
let copyright = new Date();
document.getElementById("copyright").innerHTML = "© " + copyright.getFullYear() + " <b>TeknologiU.</b> " + "All rights reserved.";

// Aos JS
AOS.init({
  once: true,
});

// Hero Animasi Typing
let i = 0;
let text = "Halo Uceers, selamat datang!";

const typing = () => {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
};

typing();
