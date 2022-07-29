// dom slideshoww elements
const slideContainer = document.querySelector(".carousel");
const slide = document.querySelector("ul");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const interval = 1000;
const princess = document.querySelector("#set-princess");

// slides
let slides = document.querySelectorAll("li");
let index = 0;

// start en endpoint
let addFirstClone = () => {
  const firstClone = slides[0].cloneNode(true);
  firstClone.id = "first-clone";
  slide.append(firstClone);
};
let addLastClone = () => {
  const lastClone = slides[slides.length - 1].cloneNode(true);
  lastClone.id = "last-clone";
  slide.prepend(lastClone);
};

// width for slideshow
const slideWidth = slides[index].clientWidth;

// transform slides
slide.style.transform = `translateX(${-slideWidth * index}px)`;

// slide next
const moveToNextSlide = () => {
  slides = document.querySelectorAll("li");
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".5s";
};
// slide prev
const moveToPrevSlide = () => {
  slides = document.querySelectorAll("li");
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = ".5s";
};

// stop slider
/* slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll("li");
  if (slides[index].id === addFirstClone()) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (slides[index].id === addLastClone()) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  } 
});*/
/* addMovie.addEventListener("transitionend", () => {
  console.log("einde");
  slide.style.transition = "none";
}); */

next.addEventListener("click", moveToNextSlide);
prev.addEventListener("click", moveToPrevSlide);
