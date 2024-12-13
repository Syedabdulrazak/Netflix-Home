const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
// Example: Add interactivity for the movie images
document.querySelectorAll('.movies img').forEach((img) => {
  img.addEventListener('click', () => {
      alert(`You clicked on ${img.alt}`);
  });
});

