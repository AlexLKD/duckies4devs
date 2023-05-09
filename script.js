// --------------------Hide content on click----------------------
// get the buttons and the content to hide
const btnAdv = document.querySelector(".btn-advantages");
const btnCar = document.querySelector(".btn-car");
const advantages = document.querySelector(".product-advantages");
const car = document.querySelector(".product-car");
// add listener on click to hide the content
btnAdv.addEventListener("click", function () {
    advantages.classList.toggle("hidden");
    btnAdv.classList.toggle("closed");
});
btnCar.addEventListener("click", function () {
    car.classList.toggle("hidden");
    btnCar.classList.toggle("closed");
});

// -----------------Carrousel + change img on hover----------------
// get the main img and the thumbnail imgs
const mainImg = document.querySelector(".pictures-img");
const thumbs = document.querySelectorAll(".thumbs-img");
// Change img on hover
thumbs.forEach((thumb, index) => {
    thumb.addEventListener("mouseover", function () {
        // Update src
        mainImg.src = this.src.replace("s.png", "l.png");
    });
});
// get previous and next buttons
const prevPic = document.querySelector(".pictures-prev");
const nextPic = document.querySelector(".pictures-next");

// add counter
let currentImg = 0;

// switch image of the carrousel
nextPic.addEventListener("click", function () {
    currentImg++;
    if (currentImg >= thumbs.length) {
        // if there's no img left, then go back to the first one
        currentImg = 0;
    }
    // change img src to get the bigger one
    mainImg.src = thumbs[currentImg].src.replace("s.png", "l.png");
});

prevPic.addEventListener("click", function () {
    currentImg--;
    if (currentImg < 0) {
        // if the current img is the first img, then go back to the last img
        currentImg = thumbs.length - 1;
    }
    // change img src to get the bigger one
    mainImg.src = thumbs[currentImg].src.replace("s.png", "l.png");
});
