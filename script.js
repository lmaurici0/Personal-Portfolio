$(document).ready(function () {
    function adjustLayout() {
        var screenWidth = $(window).width();
        var $card = $('.card');
        var $h1 = $("h1")

        if (screenWidth < 600) {
            $card.addClass('d-flex flex-column justify-content-center align-items-center');
            $card.css('margin-top', "10px")
            $h1.removeClass("display-1")
            $h1.css("font-size","5rem")
        } else {
            $card.removeClass('d-flex flex-column justify-content-center align-items-center');
            $h1.addClass("display-1")
        }
    }

    adjustLayout();

    $(window).resize(function () {
        adjustLayout();
    });
});
