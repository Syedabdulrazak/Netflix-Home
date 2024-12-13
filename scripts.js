// Example: Add interactivity for the movie images
document.querySelectorAll('.movies img').forEach((img) => {
  img.addEventListener('click', () => {
      alert(`You clicked on ${img.alt}`);
  });
});
