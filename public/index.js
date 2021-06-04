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
    const images = [
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Tree_and_Morning_Mist_Jos_Buurmans.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Mists_of_renfrew_Adam_Gibbs.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Cool_Power_commended-LPOTY_UK_Steve_Cole.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Happy_Birthday_Adam_Iwona_Podlasinska.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Sheep_in_the_woods_II_James_Mills.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Dawn_of_Another_Day_Sky_Matthews.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/benito_druck.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Fantasy_Island_Daniel_Cheong.jpg',
        'https://combo.staticflickr.com/ap/build/images/sohp/2020-top-25/Frosch_Bokeh_2_Axel_F.jpg',
    ]
    function showHide(){
        var random = Math.floor(Math.random() * 9);
        $('#LandingImg').css({
            "background-image" : "url("+images[random]+")"
        });     
    }
    setInterval(showHide,5000);
    //Comment On Media
    var textArea = document.getElementById("commentTextArea");
    textArea.addEventListener("focus", commentFocusFunction, true);

    function commentFocusFunction() {
    document.getElementById("commentBtn").style.display = "block";
    }
//
});