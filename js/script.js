const heroBannerSwiper = new Swiper('.swiper.hero-banner-swiper', {
  speed: 600,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  }
});

const collectionSwiper = new Swiper(".swiper.collection-swiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 24,
  grabCursor: true,
  loop: false,
  slidesSizesGrid: [312, 312, 312, 312, 312],
  uniqueNavElements: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16
    },
    1279: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

const productData = {
  id: "product1",
  title: "Nike Air Max Plus",
  description: "Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. ",
  defaultColor: "pink",
  items: {
    white: {
      price: 280.00,
      src: ["media/images/product/white-1.png", "media/images/product/white-2.png", "media/images/product/white-3.png", "media/images/product/white-4.png", "media/images/product/white-5.png",]
    },
    black: {
      price: 320.00,
      src: ["media/images/product/black-1.png", "media/images/product/black-2.png", "media/images/product/black-3.png", "media/images/product/black-4.png", "media/images/product/black-5.png",]
    },
    pink: {
      price: 260.00,
      src: ["media/images/product/pink-1.png", "media/images/product/pink-2.png", "media/images/product/pink-3.png", "media/images/product/pink-4.png", "media/images/product/pink-5.png",]
    }
  }
}
// Menu
function initBurgerMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navMenuWrapper = document.querySelector('.nav-wrapper');
  const navLinks = document.querySelectorAll('.nav-link');

  burgerMenu.addEventListener('click', () => {
    const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
    burgerMenu.classList.toggle('open');
    navMenuWrapper.classList.toggle('menu-active');
    burgerMenu.setAttribute('aria-expanded', !isExpanded);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('open');
      navMenuWrapper.classList.remove('menu-active');
      burgerMenu.setAttribute('aria-expanded', 'false');
    });
  });
}


//Product Card
function initProductCard (data){
  let selectedColor = data.defaultColor;
  let selectedSize = null;

  const card = document.querySelector('.product-card');
  const mainImgEl = card.querySelector('.main-image-wrapper img');
  const galleryEl = card.querySelector('.product-gallery');
  const titleEl = card.querySelector('.product-title');
  const priceEl = card.querySelector('.product-price');
  const descriptionEl = card.querySelector('.product-description');
  const colorsButtons = card.querySelectorAll('.color-button');
  const sizesButtons = card.querySelectorAll('.size-options button');

  function renderProductInfo () {
    titleEl.textContent = data.title;
    descriptionEl.textContent = data.description;
    updatePrice(selectedColor);
    loadGallery(selectedColor);
    renderColorOptionsImages();

    selectedSize = null;
    card.querySelectorAll('.size-options button').forEach(b => b.classList.remove('active'));
  }

  function loadGallery (color) {
    if (!galleryEl) return;
    galleryEl.innerHTML = '';

    data.items[color].src.forEach((imgURL, id) => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');
      if (id === 0) imgContainer.classList.add("active");
      const imgEl = document.createElement('img');
      imgEl.dataset.src = imgURL;
      imgEl.src = imgURL;
      imgEl.width = 88;

      imgContainer.appendChild(imgEl);
      galleryEl.appendChild(imgContainer);
    });

    const firstImg = galleryEl.querySelector("img");
    if (firstImg) {
      mainImgEl.src = firstImg.dataset.src;
      mainImgEl.alt = `${productData.title} - ${color}`;
    }
  }



  function updatePrice (color) {
    priceEl.textContent = `$ ${data.items[color].price}`
  }

  function renderColorOptionsImages () {
    colorsButtons.forEach(btn => {
      btn.innerHTML = '';
      const imgEl = document.createElement('img');
      const color = btn.dataset.color;
      const imgUrl = data.items[color].src[0]
      imgEl.src = imgUrl;
      imgEl.alt = color + " color option";
      btn.appendChild(imgEl);

      btn.classList.toggle('active', color === selectedColor);
    })
  }

  galleryEl.addEventListener('click', (e) =>{
    if (e.target.tagName === 'IMG'){
      mainImgEl.src = e.target.dataset.src;
      galleryEl.querySelectorAll('.image-container').forEach(image => image.classList.remove('active'));
      e.target.closest('.image-container').classList.add('active');
    }
  })

  colorsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedColor = btn.dataset.color;
      renderProductInfo()
    })
  })

  sizesButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedSize = btn.dataset.size;
      sizesButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    })
  })

  renderProductInfo();
}

function initNeedHelpForm (){
  const needHelpForm = document.querySelector('.need-help-form');
  if(!needHelpForm) return;
  needHelpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thank You!');
    needHelpForm.reset();
  })
}


function initFooterMenu() {
  const footerButtons = document.querySelectorAll('.footer-button');
  footerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const menuId = button.getAttribute('aria-controls');
      const menuList = document.getElementById(menuId);

      menuList.classList.toggle('is-active');
      const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
      button.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

function initPopup() {
    if (sessionStorage.getItem("popupDismissed")) return;
    setTimeout(() => {
      document.querySelector(".popup-overlay").classList.add("active");
    }, 1000);

    const popupOverlay = document.querySelector(".popup-overlay");
    const popupClose = document.querySelector(".popup-close");
    const popupForm = document.querySelector(".popup-form");

    popupClose.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
      sessionStorage.setItem("popupDismissed", "true");
    });

    popupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.querySelector(".popup-email").value;

      if (email) {
        alert("Email sent: " + email);
        popupOverlay.classList.remove("active");
        localStorage.setItem("popupDismissed", "true");
      }
    });
  }

function init () {
  initBurgerMenu();
  initProductCard(productData);
  initNeedHelpForm();
  initFooterMenu();
  initPopup();
}

document.addEventListener('DOMContentLoaded', init);
