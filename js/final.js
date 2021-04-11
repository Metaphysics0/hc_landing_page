// Remove default inline styles for svg animation
const find = document.querySelectorAll('#lottie > svg')[0];
find.removeAttribute('height');
find.removeAttribute('width');
find.removeAttribute('style');

// JAVASCRIPT SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Alert Easter Egg!
window.onload = function () {
  const form = document.getElementById('navSearch');
  form.onsubmit = function (e) {
    e.preventDefault();
    alert('I love you!!');
  };
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', () => {
    alert('Rachel is the best ❤️');
  });
};

// Transparent Navbar + bounce effect
const navbar = document.getElementById('navbar');
let scrolled = false;
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-100px)';
    }
    setTimeout(() => {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 300);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};
