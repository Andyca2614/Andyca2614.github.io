 
 $(window).scroll(function() {
    var lista = [".ind1", ".ind2", ".ind3", ".ind4"];
    lista.forEach(function(element) {
        if ($(element).visible(true)) {
            $(element).addClass("visible");
        } else {
            $(element).removeClass("visible");
        }
    });

    if ($(".marco").visible(true)) {
        $(".marco").addClass("visible");
    } else {
        $(".marco").removeClass("visible");
    }
});

// Efecto de parallax y fade-in
function onScrollEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    const fadeInElements = document.querySelectorAll('.fade-in');

    parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

    fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Añadir evento de scroll
window.addEventListener('scroll', onScrollEffect);