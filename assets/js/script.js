const navItems = document.querySelectorAll(".direction-links");

$(document).ready(function () {
  function adjustLayout() {
    var screenWidth = $(window).width();
    var $picture = $(".profile_picture");
    var $span = $("#spanDev")

    if (screenWidth < 600) {
      $span.append("<br>");
    } else {
      
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
