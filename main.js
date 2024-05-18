document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("addMeButton");

    // Add hover effect
    button.addEventListener("mouseover", function() {
        button.querySelector(".group-2").style.backgroundColor = "#004bb5";
    });

    button.addEventListener("mouseout", function() {
        button.querySelector(".group-2").style.backgroundColor = "#0054CD";
    });

    button.addEventListener("click", function() {
        var group2 = button.querySelector(".group-2");
        group2.style.animation = "clickAnimation 0.2s";
        group2.addEventListener("animationend", function() {
            group2.style.animation = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("blur");
    document.getElementById("loading-text").classList.add("visible");

    setTimeout(function() {
        document.body.classList.remove("blur");
        document.getElementById("loading-text").classList.remove("visible");
    }, 1200);
});
;


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$(window).on('mousewheel', function (e) {
    e.preventDefault();
    var delta = e.originalEvent.wheelDelta;
    var scrollDistance = 100;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (scrollDistance * delta / Math.abs(delta))
    }, 150, 'linear');
});


$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        $('.stage').each(function () {
            var offset = $(this).offset().top;
            var height = $(this).outerHeight();

            if (scrollTop > offset - windowHeight && scrollTop < offset + height) {
                $(this).find('.line').css('opacity', 1);
            } else {
                $(this).find('.line').css('opacity', 0);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollableElement = document.documentElement;

    scrollableElement.addEventListener("scroll", function() {
        const isScrollBarClicked = window.scrollY !== scrollableElement.scrollTop;
        if (isScrollBarClicked) {
            const targetElement = document.getElementById("element");
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});


function setDynamicBackground() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    if (screenWidth >= 1920 && screenHeight >= 1080) {
        document.body.style.backgroundImage = "url('assets/background1.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    } else {
        document.body.style.backgroundImage = "url('assets/default-background.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
}

window.addEventListener('DOMContentLoaded', setDynamicBackground);
window.addEventListener('resize', setDynamicBackground);


