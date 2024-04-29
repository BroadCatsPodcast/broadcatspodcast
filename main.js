window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const distanceFromTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (distanceFromTop < screenHeight * 0.75) {
            section.classList.add('blur-effect', 'active');
        } else {
            section.classList.remove('blur-effect', 'active');
        }
    });
});