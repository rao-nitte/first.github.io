// Function to validate the email format (same as before)
function isEmailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to validate the password (same as before)
function isPasswordValid(password) {
    return password.length >= 8;
}

// Function to handle form submission (same as before)
function validateEmployeeRegistrationForm(event) {
    // Existing validation code
}

// Add an event listener to the registration form (same as before)
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', validateEmployeeRegistrationForm);

// Smooth Scrolling (Option 1)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dropdown Menus (Option 2)
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

dropdownMenus.forEach(dropdown => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    const content = dropdown.querySelector('.dropdown-content');

    trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        content.classList.toggle('active');
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            content.classList.remove('active');
        }
    });
});

// Image Sliders (Option 3)
// Example code using Slick Slider library
$(document).ready(function(){
  $('.image-slider').slick({
    // Add your slider configuration options here
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});
