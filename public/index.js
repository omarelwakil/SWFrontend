$(document).ready(function () {
    $("#search-icon-sm").on('click', function () {
        $("#div-logo,#div-logo-user-less,#div-login,#div-upload,#log-in,#sign-up-btn,#div-nav-items,#notification-btn,#user-settings").addClass("d-none");
        $("#search-box").addClass("search-bar-active");
        $("#search-icon").addClass("d-block");
        $("#div-search,#div-user-less-search").addClass("w-100");
        $("#div-search").removeClass("pe-2");
        $("#close-search-icon").removeClass("d-none");
        if ($(window).outerWidth() >= 768) {
            $("#div-signup").removeClass("d-md-block");
        }
        $("#search-icon-sm").addClass("d-none");
    });

    $("#close-search-icon").on('click', function () {
        $("#div-search,#div-user-less-search").removeClass("w-100");
        if ($("#div-user-less-search").length > 0) {
            setTimeout(function () {
                $("#div-search").addClass("pe-2");
                $("#search-box").removeClass("search-bar-active");
                $("#close-search-icon").addClass("d-none");
                if ($(window).outerWidth() >= 768 && $("#div-signup").hasClass("d-md-block") == false) {
                    $("#div-signup").addClass("d-md-block");
                }
                $("#div-logo,#div-logo-user-less,#div-login,#div-upload,#log-in,#sign-up-btn,#div-nav-items,#notification-btn,#user-settings").removeClass("d-none");
                $("#search-icon-sm").removeClass("d-none");
                $("#search-icon").removeClass("d-block");
            }, 800);
        } else {
            $("#div-search").addClass("pe-2");
            $("#search-box").removeClass("search-bar-active");
            $("#close-search-icon").addClass("d-none");
            if ($(window).outerWidth() >= 768 && $("#div-signup").hasClass("d-md-block") == false) {
                $("#div-signup").addClass("d-md-block");
            }
            $("#div-logo,#div-logo-user-less,#div-login,#div-upload,#log-in,#sign-up-btn,#div-nav-items,#notification-btn,#user-settings").removeClass("d-none");
            $("#search-icon-sm").removeClass("d-none");
            $("#search-icon").removeClass("d-block");
        }
    });
    // Landing Page Slider 
    function showHide(){
        var showToHide = $(".landing-carousel-img.show");
        var hideToShow = $(".landing-carousel-img.show").next();
        if(hideToShow.length === 0)
        {
            hideToShow = $(".landing-carousel-img.hide");
        }
        showToHide.removeClass("show");
        showToHide.addClass("hide");
        hideToShow.removeClass("hide");
        hideToShow.addClass("show");        
    }
    setInterval(showHide,9000);
});