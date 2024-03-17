const navItems = document.querySelectorAll(".direction-links");

$(document).ready(function () {
  function adjustLayout() {
    var screenWidth = $(window).width();
    var $card = $(".card");
    var $h1 = $("h1");
    var $abth1 = $(".aboutTitle");
    var $card = $(".mainAbout");
    var $about = $(".about");
    var $divFlex = $(".flex");
    var $messages = $(".messages");
    var $small = $(".small");

    if (screenWidth < 600) {
      $h1.removeClass("display-1");
      $h1.css("font-size", "5rem");
      $abth1.css("font-size", "1.5rem");
      $card.addClass("d-block");
      $about.css("width", "350px");
      $divFlex.removeClass("d-flex");
      $messages.css("marginLeft", "10px");
      $messages.css("width", "100%");
      $small.css("width", "100%");
    } else {
      $h1.addClass("display-1");
      $divFlex.addClass("d-flex");
    }
  }

  adjustLayout();

  $(window).resize(function () {
    adjustLayout();
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("ativ");
    });
    item.classList.add("ativ");
  });
});

const button = document.getElementById("showMore");
const textoResumido = document.getElementById("textoResumido");
const textoCompleto = document.getElementById("textoCompleto");

function lermais() {
  if (textoResumido.style.display === "none") {
    textoResumido.style.display = "block";
    textoCompleto.style.display = "none";
    button.textContent = "Ler Mais";
    button.style.marginLeft = "13px";
  } else {
    textoResumido.style.display = "none";
    textoCompleto.style.display = "block";
    button.textContent = "Ler Menos";
    button.style.marginLeft = "13px";
    button.style.width = "150px";
  }
}
button.addEventListener("click", lermais);
