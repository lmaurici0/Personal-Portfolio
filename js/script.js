const navItems = document.querySelectorAll(".direction-links");

$(document).ready(function () {
  function adjustLayout() {
    var screenWidth = $(window).width();
    var $card = $(".card");
    var $h1 = $("h1");

    if (screenWidth < 600) {
      $card.addClass(
        "d-flex flex-column justify-content-center align-items-center"
      );
      $card.css("margin-top", "10px");
      $h1.removeClass("display-1");
      $h1.css("font-size", "5rem");
      $picture = "</br>";
    } else {
      $card.removeClass(
        "d-flex flex-column justify-content-center align-items-center"
      );
      $h1.addClass("display-1");
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
    button.style.marginLeft = "130px";
  } else {
    textoResumido.style.display = "none";
    textoCompleto.style.display = "block";
    button.textContent = "Ler Menos";
    button.style.marginLeft = "300px";
    button.style.width = "150px";
  }
}
button.addEventListener("click", lermais);
