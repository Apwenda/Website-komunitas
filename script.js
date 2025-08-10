document.addEventListener("DOMContentLoaded", function() {
  // Fade-in on scroll effect
  const faders = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  faders.forEach(fade => {
    appearOnScroll.observe(fade);
  });

  // Hero Slider functionality
  const slider = document.getElementById('sliderTrack');
  const items = document.querySelectorAll('.slider-item');
  let index = 0;

  // Next button
  document.querySelector('.next').addEventListener('click', () => {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0; // Loop back to the first item
    }
    slider.style.transform = `translateX(-${index * 100}vw)`;
  });

  // Previous button
  document.querySelector('.prev').addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1; // Loop back to the last item
    }
    slider.style.transform = `translateX(-${index * 100}vw)`;
  });

  // Optional: Auto-slide
  // setInterval(() => {
  //   if (index < items.length - 1) {
  //     index++;
  //   } else {
  //     index = 0;
  //   }
  //   slider.style.transform = `translateX(-${index * 100}vw)`;
  // }, 5000); // Change slide every 5 seconds

  // Navbar Toggler for one-click close (Bootstrap 5 handles this well, but adding explicit close for robustness)
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.getElementById('navbarNav');

  if (navbarToggler && navbarCollapse) {
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      // This event fires when the collapse is about to be hidden
      // No specific action needed here for one-click close, as Bootstrap handles it.
      // This is more for debugging or custom animations if needed.
    });

    // Close navbar when a nav-link is clicked (useful for single-page apps)
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  }
});
