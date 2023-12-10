$(document).ready(function () {
    function adjustLayout() {
        var screenWidth = $(window).width();
        var $projects = $('.projects')
        if (screenWidth < 600) {
            $projects.addClass('vertical-layout')
        } else {
            $projects.removeClass('vertical-layout')
        }
    }
    adjustLayout()
    $(window).resize(function () {
        adjustLayout()
    })
})