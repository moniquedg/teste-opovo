document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    hamburger.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('open');
    });

    const slides = document.querySelector('.slides');
    const slideWidth = 190 + 16; // 190px width + 16px margin-right
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex = 0;

    const updateSlidePosition = () => {
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    next.addEventListener('click', () => {
        if (currentIndex < slides.children.length - 6) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });
});
