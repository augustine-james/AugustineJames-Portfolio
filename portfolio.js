document.addEventListener('DOMContentLoaded', function () {
    const hamberger = document.querySelector('.hamberger');
    const times = document.querySelector('.times');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav ul li a');


    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });


    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

   
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
        });
    });
});