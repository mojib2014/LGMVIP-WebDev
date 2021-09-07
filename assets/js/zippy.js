// DOM Elements
const header = document.getElementById("header");
const banner = document.getElementById("banner");
const carouselImg = document.getElementById("carousel-img");
const images = document.querySelectorAll(".carousel-img");
const playBtns = document.querySelectorAll("#video-play-btn");
const previousBtn = document.querySelector(".zippy-life-images .previous");
const next = document.querySelector(".next");
// Navbar active class

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
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

// Change header color on scroll
const sticky = header.offsetTop;

window.addEventListener("scroll", () => {
  // minus 70 cause it needs to start before it passes banner section
  if (window.pageYOffset > banner.clientHeight - 70)
    header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Life in Zippy carousel
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    const src = e.target.src;
    carouselImg.src = src;
  });
});

// Play and Pause video
playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", (e) => {
    const videoElement = e.target.parentElement.children[0];

    if (videoElement.paused) {
      videoElement.play();
      playBtn.innerText = "||";
    } else {
      videoElement.pause();
      playBtn.innerText = "►";
      playBtn.style.display = "block";
    }
  });
});

// Slide previou and next
previousBtn.addEventListener("click", () => {
  const images = document.querySelectorAll(".images-flexbox img");
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
