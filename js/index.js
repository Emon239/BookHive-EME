let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

// Login form functionality
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};

// Scroll functionality for header
window.onscroll = () => {
    searchForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};

const booksSwiper = new Swiper(".books-slider", {
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

const featuredSwiper = new Swiper(".featured-slider", {
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
    // Check if button is already in "Added" state
    if (btn.innerText === "✔ Added!") {
      return;
    }
    
    const originalText = btn.innerText;
    const originalBackground = btn.style.background;
    
    btn.innerText = "✔ Added!";
    btn.style.background = "#27ae60";
    
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = originalBackground;
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

// Loading screen functionality
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// Back to top functionality
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Update cart count
function updateCartCount() {
    cartCountElement.textContent = cartCount;
}

// Add to cart functionality
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.textContent.includes('Add to Cart')) {
            cartCount++;
            updateCartCount();
            
            // Show success message
            const originalText = btn.textContent;
            btn.textContent = '✔ Added!';
            btn.style.background = '#27ae60';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#219150';
            }, 1500);
        }
    });
});

// Quick View Modal functionality
const modal = document.getElementById('quick-view-modal');
const closeModal = document.querySelector('.close-modal');

// Book data for quick view
const bookData = {
    'Dark Psychology': {
        image: 'Images/book1.jpg',
        price: '$12.99',
        stars: 5,
        description: 'A comprehensive guide to understanding human psychology and behavior patterns. Perfect for students and professionals interested in psychological studies.'
    },
    'Alice Feeney': {
        image: 'Images/book2.jpg',
        price: '$16.99',
        stars: 4.5,
        description: 'A thrilling mystery novel by bestselling author Alice Feeney. Full of unexpected twists and psychological suspense.'
    },
    'Harry Potter': {
        image: 'Images/book3.jpg',
        price: '$25.99',
        stars: 5,
        description: 'The magical world of Harry Potter comes alive in this beloved series. A must-read for fantasy lovers of all ages.'
    },
    'Eloquent JavaScript': {
        image: 'Images/book4.jpg',
        price: '$29.99',
        stars: 4.5,
        description: 'Learn JavaScript programming from the ground up with clear explanations and practical examples.'
    },
    'HTML and CSS': {
        image: 'Images/book5.jpg',
        price: '$17.99',
        stars: 5,
        description: 'Master web development fundamentals with this comprehensive guide to HTML and CSS.'
    }
};

// Add quick view functionality to book images
document.querySelectorAll('.featured .box .image img, .arrivals .box .image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
        e.preventDefault();
        const bookTitle = img.closest('.box').querySelector('h3').textContent;
        const data = bookData[bookTitle];
        
        if (data) {
            document.getElementById('modal-book-image').src = data.image;
            document.getElementById('modal-book-title').textContent = bookTitle;
            document.getElementById('modal-book-price').textContent = data.price;
            
            // Create stars
            const starsContainer = document.getElementById('modal-book-stars');
            starsContainer.innerHTML = '';
            for (let i = 0; i < Math.floor(data.stars); i++) {
                starsContainer.innerHTML += '<i class="fas fa-star"></i>';
            }
            if (data.stars % 1 !== 0) {
                starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            document.getElementById('modal-book-description').textContent = data.description;
            modal.classList.add('show');
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});
