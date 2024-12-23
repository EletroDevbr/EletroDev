document.addEventListener("DOMContentLoaded", () => {
  console.log("Site carregado com sucesso!");

  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Alternar automaticamente a cada 5 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000);
});
