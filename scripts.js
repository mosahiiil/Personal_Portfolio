// Handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
  
    // Open the mobile menu
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });
  
    // Close the mobile menu
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  
    // Close the menu when clicking on a link and scroll to section
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  