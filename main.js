document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    function fadeInElements() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight) {
                element.classList.add('visible');
            }
        });
    }

    fadeInElements();

    window.addEventListener('scroll', fadeInElements);
});