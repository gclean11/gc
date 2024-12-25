document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showNextSlide() {
        slides[currentSlide].style.opacity = 0; // Versteckt aktuelle Folie
        currentSlide = (currentSlide + 1) % slides.length; // Geht zur nächsten Folie
        slides[currentSlide].style.opacity = 1; // Zeigt neue Folie
    }

    setInterval(showNextSlide, 3000); // Folie wechselt alle 3 Sekunden
});
