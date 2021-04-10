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
    alert('Christy is the worst!');
  };
};

// Transparent Navbar
const navbar = document.getElementById('navbar');
window.onscroll = () => {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
};
