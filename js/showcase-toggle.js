$(document).ready(function () {

    $("#toggle_showcase_button").click(function () {
        $(this).toggleClass("closet");
        $(".cover_card").toggleClass("closet");
        $("#showcase_container").toggleClass("off");
    });

});
