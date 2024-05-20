 document.addEventListener("DOMContentLoaded", function() {
document.body.classList.add("blur");
document.getElementById("loading-text").classList.add("visible");
setTimeout(function() {
document.body.classList.remove("blur");
document.getElementById("loading-text").classList.remove("visible");
}, 1500);
});
;


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("addMeButton");

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

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
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

