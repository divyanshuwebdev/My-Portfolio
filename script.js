var typed = new Typed(".text", {
    strings: ["Web Development", "Front-end Development", "Backend", "Data-Structures"],
    typeSpeed: 100,
    backtype: 100,
    backdelay: 1000,
    loop: true
});

const toTop = document.querySelector(".top_arrow");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("top");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener("click", function () {
        scrollToTop();
    });

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 1.5 &&
                window.pageYOffset < sectionTop + sectionHeight - sectionHeight / 1.5) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                setTimeout(() => {
                    const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: offsetTop, // Adjust the offset as needed
                        behavior: 'smooth'
                    });
                }, 500); // Delay of 0.5 seconds
            }
        });


    });


});

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 250;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }

        else {
            reveals[i].classList.remove('active');
        }

    }
}

// window.addEventListener('scroll', reveal);

// function reveal() {
//     var reveals = document.querySelectorAll('.reveal_x');

//     for (var i = 0; i < reveals.length; i++) {

//         var windowheight = window.innerHeight;
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 250;

//         if (revealtop < windowheight - revealpoint) {
//             reveals[i].classList.add('active');
//         }

//         else {
//             reveals[i].classList.remove('active');
//         }

//     }
// }






