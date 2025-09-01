let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');

}

// ok 
let loginForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}


document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.remove('active');
}

// s 
window.onscroll=()=>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
}


window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
}
// ok 

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
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

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "✔ Added!";
    btn.style.background = "#27ae60";
    setTimeout(() => {
      btn.innerText = "Add to Cart";
      btn.style.background = "#219150";
    }, 1500);
  });
});

document.addEventListener("DOMContentLoaded", () => {
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

        message.style.fontSize = "2.5rem"; 
        message.style.fontWeight = "500"; 
        message.style.textAlign = "center";
        message.style.marginTop = "1rem";
        message.style.fontFamily = "Poppins, sans-serif";

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
    });
    emailInput.addEventListener("blur", () => {
        emailInput.style.boxShadow = "none";
    });

    const btn = document.querySelector(".newsletter .btn");
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.transition = "0.3s";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

var swiper = new Swiper(".arrivals-slider", {
    slidesPerView: 3,        // show 3 books at a time
    spaceBetween: 20,        // gap between books
    loop: true,              // infinite loop
    autoplay: {
      delay: 2500,           // auto-slide every 2.5s
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

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });