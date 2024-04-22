// footer.js
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
  
    if (scrollPosition + windowHeight >= bodyHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });