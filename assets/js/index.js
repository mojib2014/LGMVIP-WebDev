// DOM Elements
const header = document.getElementById("header");
const topnav = document.querySelector(".topnav");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu");
const banner = document.getElementById("banner");
const carouselImg = document.getElementById("carousel-img");
const images = document.querySelectorAll(".carousel-img");
const playBtns = document.querySelectorAll("#video-play-btn");
const videoSlides = document.querySelectorAll(
  ".video-projects-flex-container .flex-item",
);
const dots = document.querySelectorAll(".dot");
const previousBtns = document.querySelectorAll(".previous");
const nextBtns = document.querySelectorAll(".next");

// Mobile menu
menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (mobileMenu.style.marginLeft === "-40%") {
    menuIcon.classList.add("close");
    mobileMenu.style.marginLeft = "0";
  } else {
    menuIcon.classList.remove("close");
    mobileMenu.style.marginLeft = "-40%";
  }
}

// By clicking on header's anchor tags close mobile menu
activeClass(topnav);
activeClass(mobileMenu);
function activeClass(container) {
  // Loop through the buttons and add the active class to the current/clicked button
  const items = container.querySelectorAll("a");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      let current = container.querySelectorAll(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

// Navbar active class

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const dataIndex = e.target.getAttribute("data-index");
    currentSlide(dataIndex);
  });
});

// Change header color on scroll
const sticky = header.offsetTop;

window.addEventListener("scroll", scroll);

function scroll() {
  // minus 70 cause it needs to start before it passes banner section
  if (window.pageYOffset > banner.clientHeight - 70)
    header.classList.add("scrolled");
  else header.classList.remove("scrolled");
}

if (window.innerWidth < 900) window.removeEventListener("scroll", scroll);

// Life in Zippy carousel
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    const src = e.target.src;
    carouselImg.src = src;
  });
});

// Videos Projects Section
// Play and Pause video
playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", (e) => {
    const videoElement = e.target.parentElement.children[0];

    if (videoElement.paused) {
      videoElement.play();
      playBtn.innerText = "||";
      videoElement.setAttribute("controls", true);
    } else {
      videoElement.pause();
      playBtn.innerText = "►";
      playBtn.style.display = "block";
      videoElement.removeAttribute("controls");
    }
  });
});

// Videos slideshow
let videoSlideIndex = 1;

showVideoSlides(videoSlideIndex);

function plusSlides(n) {
  showVideoSlides((videoSlideIndex += n));
}

function showVideoSlides(n) {
  if (n > videoSlides.length) {
    videoSlideIndex = 1;
  }
  if (n < 1) {
    videoSlideIndex = videoSlides.length;
  }

  for (let i = 0; i < videoSlides.length; i++) {
    videoSlides[i].style.display = "none";
  }

  videoSlides[videoSlideIndex - 1].style.display = "block";
  videoSlides[videoSlideIndex].style.display = "block";
  videoSlides[videoSlideIndex + 1].style.display = "block";
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    plusSlides(1);
    videoSlides.forEach((slide) => {
      slide.classList.add("slide-in-from-right");
      slide.classList.remove("slide-in-from-left");
    });
  });
});

previousBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    plusSlides(-1);

    videoSlides.forEach((slide) => {
      slide.classList.add("slide-in-from-left");
      slide.classList.remove("slide-in-from-right");
    });
  });
});

// Life in Zippy slideshow

// Initialize google map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
