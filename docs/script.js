// 轮播图脚本：实现自动切换与手动切换，并同步更新指示点状态
const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
let autoplayTimer = null;

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === currentIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentIndex);
  });
}

function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  startAutoplay();
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  startAutoplay();
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.index));
    startAutoplay();
  });
});

showSlide(0);
startAutoplay();
