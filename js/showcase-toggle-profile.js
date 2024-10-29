$(document).ready(function () {
    var $carousel = $('.carousel').flickity();

    $("#toggle_showcase_button").click(function () {
        $(this).toggleClass("closet");
        $(".cover_card").toggleClass("closet");
        $("#showcase_container").toggleClass("off");
        $carousel.flickity('resize');
    });

});
