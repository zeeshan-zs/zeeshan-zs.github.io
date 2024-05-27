// loadMenu.js


function loadMenu() {
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('menu-container').innerHTML = data;
        initializeMenuFunctions(); // Initialize functions after loading menu
      })
      .catch(error => console.error('Error loading menu:', error));
  }
  
  // Call the function to load the menu
  document.addEventListener('DOMContentLoaded', loadMenu);
  
  function initializeMenuFunctions() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', function(e) {
        document.body.classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
      });
    } else {
      console.error('Mobile nav toggle button not found');
    }
  }