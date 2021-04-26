$(document).ready(function () {
    $("#search-icon-sm").on('click', function () {
        $("#div-logo,#div-login").addClass("d-none");
        $("#search-icon").addClass("d-block");
        $("#div-search").addClass("w-100");
        $("#div-search").removeClass("pe-2");
        $("#search-box").addClass("search-bar-active");
        $("#close-search-icon").removeClass("d-none");
        if ($(window).outerWidth() >= 768) {
            $("#div-signup").removeClass("d-md-block");
        }
        $("#search-icon-sm").addClass("d-none");
    });

    $("#close-search-icon").on('click', function () {
        $("#div-logo,#div-login").removeClass("d-none");
        $("#search-icon").removeClass("d-block");
        $("#div-search").removeClass("w-100");
        $("#div-search").addClass("pe-2");
        $("#search-box").removeClass("search-bar-active");
        $("#close-search-icon").addClass("d-none");
        if ($(window).outerWidth() >= 768 && $("#div-signup").hasClass("d-md-block") == false) {
            $("#div-signup").addClass("d-md-block");
        }
        $("#search-icon-sm").removeClass("d-none");
    });
});