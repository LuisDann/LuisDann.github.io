// JavaScript for Parallax Effect
window.addEventListener('scroll', function () {
    const parallax = document.querySelectorAll('.parallax');
    parallax.forEach(function (element) {
        const speed = 0.5;
        const offset = window.pageYOffset * speed;
        element.style.backgroundPosition = `center ${offset}px`;
    });
});
