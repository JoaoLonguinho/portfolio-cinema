document.addEventListener("DOMContentLoaded", function () {
  const banners = document.querySelectorAll(".banner");
  let currentIndex = 0;

  function showBanner(index) {
    banners.forEach((banner, i) => {
      if (i === index) {
        banner.classList.add("active");
      } else {
        banner.classList.remove("active");
      }
    });
  }

  function nextBanner() {
    currentIndex = (currentIndex + 1) % banners.length;
    showBanner(currentIndex);
  }

  function prevBanner() {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showBanner(currentIndex);
  }

  // Mostra o primeiro banner ao carregar a página
  showBanner(currentIndex);

  // Alterna o banner a cada 3 segundos
  setInterval(nextBanner, 3000);
});
