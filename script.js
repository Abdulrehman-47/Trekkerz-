function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const service = document.querySelector('input[name="service"]:checked').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const destination = document.getElementById('destination').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;

    // Log form data to console
    console.log('Service:', service);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Destination:', destination);
    console.log('Contact Number:', contactNumber);
    console.log('Adults:', adults);
    console.log('Children:', children);

    // Check if any fields are empty
    if (!service || !checkInDate || !checkOutDate || !destination || !contactNumber || !adults || !children) {
        alert('Please fill in all fields');
        return;
    }

    // Create message
    let message = `Service: ${service}%0A`;
    message += `Check-in Date: ${checkInDate}%0A`;
    message += `Check-out Date: ${checkOutDate}%0A`;
    message += `Destination: ${destination}%0A`;
    message += `Contact Number: ${contactNumber}%0A`;
    message += `Adults: ${adults}%0A`;
    message += `Children: ${children}`;

    // WhatsApp number
    const whatsappNumber = "+923337384660"; // Replace with your WhatsApp number

    // Redirect to WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    console.log('WhatsApp URL:', whatsappURL); // Log URL to console
    window.open(whatsappURL, '_blank');
}

// FORM SECTION ENDS HERE




// auto nav close after clicking link 

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav .nav-link');
    const checkbox = document.getElementById('click');
    
    menuLinks.forEach(link => {
       link.addEventListener('click', () => {
          checkbox.checked = false; // Uncheck the checkbox to close the menu
       });
    });
 });

 // auto nav close after clicking link Ends






// car Whatsapp text 

 document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var message = document.getElementById("messageInput").value;
    var phoneNumber = "+923054122637"; // Replace with the recipient's WhatsApp number

    // Construct the WhatsApp message URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
});


function bookNow(carName) {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Replace with your WhatsApp number in international format, e.g., "1234567890"
    const message = `Hi, I would like to book the ${carName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${+923054122637}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}


// car Whatsapp text end here










                                          // Testmonial and review section js
//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});



                                         // Testmonial and review section js Ends

                                         

                                                    // HOtels sections
                                         const swiper = new Swiper('.slider-wrapper', {
                                            loop: true,
                                            grabCursor: true,
                                            spaceBetween: 30,
                                          
                                            // Pagination
                                            pagination: {
                                              el: '.swiper-pagination',
                                              clickable: true,
                                              dynamicBullets: true
                                            },
                                          
                                            // Navigation
                                            navigation: {
                                              nextEl: '.swiper-button-next',
                                              prevEl: '.swiper-button-prev',
                                            },
                                          
                                            // Responsive
                                            breakpoints: {
                                              0: {
                                                slidesPerView: 1
                                              },
                                              768: {
                                                slidesPerView: 2
                                              },
                                              1024: {
                                                slidesPerView: 3
                                              }
                                            }
                                          });
                                                 // HOtels sections ends











                                           // cards section slider js 
// Select all slider wrappers and their corresponding buttons
const sliders = document.querySelectorAll('.card-slider-wrapper');
const nextpoints = document.querySelectorAll('.next-point');
const prevpoints = document.querySelectorAll('.prev-point');

// Loop through all sliders and attach event listeners
sliders.forEach((slider, index) => {
  const nextButton = nextpoints[index];
  const prevButton = prevpoints[index];

  // Function to scroll the slider to the right
  nextButton.addEventListener('click', () => {
    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
  });

  // Function to scroll the slider to the left
  prevButton.addEventListener('click', () => {
    slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
  });
});
                            



















// Function to initialize each slider
function initializeSlider(sliderContainer) {
  var exploreSlider = sliderContainer.querySelector('.explore-slider');
  var slides = sliderContainer.getElementsByClassName('slide').length;
  var buttons = sliderContainer.getElementsByClassName('btn');

  var currentPosition = 0;
  var currentMargin = 0;
  var slidesPerPage = 0;
  var slidesCount = slides - slidesPerPage;
  var containerWidth = sliderContainer.offsetWidth;

  // Event listener for window resize
  window.addEventListener("resize", function() {
      checkWidth(sliderContainer);
  });

  function checkWidth(container) {
      containerWidth = container.offsetWidth;
      setParams(containerWidth);
  }

  function setParams(w) {
      if (w < 551) {
          slidesPerPage = 1;
      } else if (w < 901) {
          slidesPerPage = 2;
      } else if (w < 1101) {
          slidesPerPage = 3;
      } else {
          slidesPerPage = 4;
      }
      slidesCount = slides - slidesPerPage;

      if (currentPosition > slidesCount) {
          currentPosition -= slidesPerPage;
      }
      currentMargin = -currentPosition * (100 / slidesPerPage);
      exploreSlider.style.marginLeft = currentMargin + '%';

      // Button visibility control
      buttons[0].classList.toggle('inactive', currentPosition === 0);
      buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
  }

  setParams(containerWidth);

  function slideRight() {
      if (currentPosition != 0) {
          exploreSlider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
          currentMargin += (100 / slidesPerPage);
          currentPosition--;
      }
      buttons[0].classList.toggle('inactive', currentPosition === 0);
      buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
  }

  function slideLeft() {
      if (currentPosition != slidesCount) {
          exploreSlider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
          currentMargin -= (100 / slidesPerPage);
          currentPosition++;
      }
      buttons[0].classList.toggle('inactive', currentPosition === 0);
      buttons[1].classList.toggle('inactive', currentPosition >= slidesCount);
  }

  // Attach click events to buttons
  buttons[0].onclick = slideRight;
  buttons[1].onclick = slideLeft;
}

// Initialize each slider
var exploreContainers = document.querySelectorAll('.explore-container');
exploreContainers.forEach(initializeSlider);



















