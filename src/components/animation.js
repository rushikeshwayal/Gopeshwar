// Set up an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add visible class to trigger animation
        observer.unobserve(entry.target); // Stop observing after the animation triggers once
      }
    });
  }, { threshold: 0.5 }); // Element is considered in view when 50% of it is visible
  
  // Observe all elements with the fade-in class
  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
  