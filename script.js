// Mobile view
$(document).ready(function () {
    $("#header-right").click(function () {
        $("#slider").slideToggle("500");
    });
});

$("#Home").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionabouthome").offset().top - 120
    }, 700);
});


$("#Aboutme").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionaboutme").offset().top - 100
    }, 700);
});

$("#Myworks").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmywork").offset().top - 100
    }, 700);
});

$("#Interests").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmyinterest").offset().top - 100
    }, 700);
});





// Desktop view

// $(function () {
//     $(".nav-style2").click(function () {
//         $(".nav-style2").css('color', '#F17935');
//     });
// });

// $(function() {
//     $("div").click(function() {
//        // remove classes from all
//        $("div").removeClass("first");
//        // add class to the one we clicked
//        $(this).addClass("first");
//     });
//  });


// $(".nav-style1").click(function(){
//     if($(".nav-style1").css('color')=='white')
//           $(this).css('color', 'green');
//     else {
//           $(this).css('color', 'green');
//     }
//  });



// header
$("#Home-desktop").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionabouthome").offset().top - 120
    }, 700);
});


$("#Aboutme-desktop").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionaboutme").offset().top - 150
    }, 700);
});

$("#Myworks-desktop").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmywork").offset().top - 200
    }, 700);
});

$("#Interests-desktop").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmyinterest").offset().top - 235
    }, 700);
});



// footer
$("#f11").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionabouthome").offset().top - 120
    }, 700);
});

$("#f12").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionabouthome").offset().top - 120
    }, 700);
});


$("#f22").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionaboutme").offset().top - 220
    }, 700);
});

$("#f31").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmywork").offset().top - 200
    }, 700);
});

$("#f32").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmywork").offset().top - 200
    }, 700);
});

$("#f33").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmywork").offset().top - 200
    }, 700);
});

$("#f34").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmywork").offset().top - 200
    }, 700);
});

$("#f41").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmyinterest").offset().top - 238
    }, 700);
});

$("#f42").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmyinterest").offset().top - 238
    }, 700);
});

$("#f43").click(function () {
    $('html, body').animate({
        scrollTop: $("#sectionmyinterest").offset().top - 238
    }, 700);
});