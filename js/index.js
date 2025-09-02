// Cache DOM queries for better performance
let searchForm=document.querySelector('.search-form');
let searchBtn=document.querySelector('#search-btn');

searchBtn.onclick=()=>{
    searchForm.classList.toggle('active');
}

// Cache DOM queries for better performance
let loginForm=document.querySelector('.login-form-container');
let loginBtn=document.querySelector('#login-btn');
let closeLoginBtn=document.querySelector('#close-login-btn');

loginBtn.onclick=()=>{
    loginForm.classList.toggle('active');
}

closeLoginBtn.onclick=()=>{
    loginForm.classList.remove('active');
}

// s 
// Throttle scroll events for better performance
let scrollTicking = false;
window.onscroll=()=>{
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            searchForm.classList.remove('active');

            // Cache header query for better performance
            const header2 = document.querySelector('.header .header-2');
            if(window.scrollY>80){
                header2.classList.add('active');
            }
            else{
                header2.classList.remove('active');
            }
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, adding loader-active classes');
    // Add loader-active class to body and html to hide scrollbar
    document.body.classList.add('loader-active');
    document.documentElement.classList.add('loader-active');
    
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
    console.log('Starting fadeOut timer');
    fadeOut();
});


function loader(){
  console.log('Loader function called, hiding loader');
  const loaderContainer = document.querySelector('.loader-container');
  if (loaderContainer) {
    loaderContainer.classList.add('active');
    document.body.classList.remove('loader-active');
    document.documentElement.classList.remove('loader-active');
    console.log('Loader hidden successfully');
  } else {
    console.error('Loader container not found!');
  }
}

function fadeOut(){
  setTimeout(loader, 2000);
}


// ok 

var booksSwiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500, // Reduced from 2500ms to 1500ms
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var featuredSwiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000, // Reduced from 3000ms to 2000ms
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

document.querySelectorAll(".cart-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.innerText = "✔ Added!";
    btn.style.background = "#27ae60";
    btn.style.willChange = "background-color"; // Performance optimization
    
    // Show a more user-friendly notification instead of alert
    const notification = document.createElement('div');
    notification.textContent = 'Book added to cart!';
    
    // Apply all styles at once for better performance
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      background: "#27ae60",
      color: "white",
      padding: "15px 20px",
      borderRadius: "5px",
      zIndex: "10000",
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      willChange: "transform" // Performance optimization
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "#219150";
      btn.style.willChange = "auto";
      notification.remove();
    }, 1500);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    // Cache DOM queries for better performance
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector(".newsletter .box");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const message = document.createElement("p");

        const oldMessage = form.querySelector("p");
        if (oldMessage) oldMessage.remove();

        if (validateEmail(email)) {
            message.textContent = "Thank you for subscribing!";
            message.style.color = "#130f01ff";
        } else {
            message.textContent = "Please enter a valid e-mail address";
            message.style.color = "#e74c3c";
        }

        // Apply all styles at once for better performance
        Object.assign(message.style, {
            fontSize: "2.5rem",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "1rem",
            fontFamily: "Poppins, sans-serif"
        });

        form.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);

        if(validateEmail(email)) emailInput.value = "";
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    emailInput.addEventListener("focus", () => {
        emailInput.style.boxShadow = "0 0 10px rgba(255,255,255,0.7)";
        emailInput.style.transition = "0.3s";
        emailInput.style.willChange = "box-shadow"; // Performance optimization
    });
    emailInput.addEventListener("blur", () => {
        emailInput.style.boxShadow = "none";
        emailInput.style.willChange = "auto";
    });

    const btn = document.querySelector(".newsletter .btn");
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.3s";
        btn.style.willChange = "transform"; // Performance optimization
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
        btn.style.willChange = "auto";
    });
});

var arrivalsSwiper = new Swiper(".arrivals-slider", {
    slidesPerView: 3,        // show 3 books at a time
    spaceBetween: 20,        // gap between books
    loop: true,              // infinite loop
    autoplay: {
      delay: 1500,           // auto-slide every 1.5s (reduced from 2.5s)
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {           // responsive settings
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

  var reviewSwiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000, // Reduced from 3000ms to 2000ms
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

   var blogsSwiper = new Swiper(".blogs-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1500, // Reduced from 2500ms to 1500ms
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
    },
  });


  // footer script


document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM queries for better performance
  const footerLinks = document.querySelectorAll(".footer .box a");
  footerLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "#27ae60"; 
      link.style.transition = "0.3s";
      link.style.willChange = "color"; // Performance optimization
    });
    link.addEventListener("mouseleave", () => {
      link.style.color = "var(--light-color)";
      link.style.willChange = "auto";
    });
  });

  const socialIcons = document.querySelectorAll(".footer .share a");
  socialIcons.forEach(icon => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      // Use a more performant way to show message
      const message = "Redirecting to: " + icon.className.split(" ")[1].replace("fa-", "");
      console.log(message); // Better performance than alert
      // You can replace this with a custom notification if needed
    });
  });

  const credit = document.querySelector(".footer .credit");
  const year = new Date().getFullYear();
  credit.innerHTML = `Created by <span>Emon, Mehedi, Ema</span> | &copy; ${year} All rights reserved!`;

  // Create scroll button with optimized styling
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "↑";
  scrollBtn.id = "scrollTopBtn";
  
  // Apply all styles at once for better performance
  Object.assign(scrollBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "50%",
    background: "#27ae60",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    display: "none",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "0.3s"
  });
  
  document.body.appendChild(scrollBtn);

  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 200) {
          scrollBtn.style.display = "block";
        } else {
          scrollBtn.style.display = "none";
        }
        ticking = false;
      });
      ticking = true;
    }
  });

  scrollBtn.addEventListener("click", () => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

});
