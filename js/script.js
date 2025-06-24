document.addEventListener("DOMContentLoaded", () => {
  // --------- MENÚ RESPONSIVO ---------
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });
  }

  // --------- BOTÓN SCROLL-UP ---------
  const scrollBtn = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if (scrollBtn) {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  });

  // --------- NAVBAR OCULTAR AL SCROLL ---------
  let prevScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (navbar) {
      navbar.style.top = (prevScroll > currentScroll) ? "0" : "-80px";
    }
    prevScroll = currentScroll;
  });

  // --------- CARRUSEL ---------
  const slides = document.querySelectorAll('.carousel-slide');
  const carouselContainer = document.querySelector('.carousel-container');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let index = 0;

  const updateCarousel = () => {
    if (carouselContainer) {
      const offset = -index * 100;
      carouselContainer.style.transform = `translateX(${offset}%)`;
    }
  };

  if (slides.length > 0 && carouselContainer && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    // autoplay cada 7s
    setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel();
    }, 7000);
  }
});
