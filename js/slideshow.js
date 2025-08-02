document.querySelectorAll(".slideshow-container").forEach((container) => {
    let slides = container.querySelectorAll(".slide");
    let currentIndex = 0;

    slides[currentIndex].style.display = "block";

    container.querySelector(".prev").addEventListener("click", () => {
        slides[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].style.display = "block";
    });

    container.querySelector(".next").addEventListener("click", () => {
        slides[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = "block";
    });
});