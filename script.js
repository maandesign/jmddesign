// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href.startsWith('/') || href.startsWith('http')) return;
    const target = document.querySelector(href);
    if(target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

var testimonialCarousel = document.querySelector('#testimonialCarousel');
var carousel = new bootstrap.Carousel(testimonialCarousel, {
  interval: 5000,  // change slide every 5 seconds
  ride: 'carousel'
});