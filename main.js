(function() {
  // Toggler Animation Functionality
  function setupTogglerAnimations() {
    const togglerContainers = document.querySelectorAll('.toggler-container');
    
    togglerContainers.forEach(container => {
      const titleElement = container.querySelector('.toggler-title');
      const contentElement = container.querySelector('.toggler-content');
      const openIcon = container.querySelector('.open');
      const closeIcon = container.querySelector('.close');

      titleElement.addEventListener('click', () => {
        // Toggle active state
        container.classList.toggle('active');
        
        if (container.classList.contains('active')) {
          // Open state
          contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
          contentElement.style.opacity = '1';
          openIcon.style.display = 'none';
          closeIcon.style.display = 'inline-block';
        } else {
          // Close state
          contentElement.style.maxHeight = '0';
          contentElement.style.opacity = '0';
          openIcon.style.display = 'inline-block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }

  // Navbar Scroll Animation
  function setupNavbarScrollAnimation() {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50; // pixels

    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
        navbar.style.transition = 'transform 0.5s ease, background-color 0.5s ease';
        navbar.style.transform = 'translateY(-1.25rem)';
        navbar.style.backgroundColor = 'var(--purple--800)';
      } else {
        navbar.classList.remove('scrolled');
        navbar.style.transition = 'transform 0.5s ease, background-color 0.5s ease';
        navbar.style.transform = 'translateY(0)';
        navbar.style.backgroundColor = 'transparent';
      }
    });
  }

  // Infinite Logo Slider
  function setupInfiniteLogoSlider() {
    const logoCarousels = document.querySelectorAll('.logos_carousel');
    
    logoCarousels.forEach(carousel => {
      carousel.innerHTML += carousel.innerHTML; // Duplicate content for seamless loop
    });
  }

  // Initialize all functionalities when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    setupTogglerAnimations();
    setupNavbarScrollAnimation();
    setupInfiniteLogoSlider();
  });
})();