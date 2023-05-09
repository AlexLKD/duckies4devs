// --------------------Hide content on click----------------------
// get the buttons and the content to hide
const btnProducts = document.querySelectorAll(".product-div > .product-subttl");
const txtProducts = document.querySelectorAll(".product-txt");
// forEach loop to iterate for every button
btnProducts.forEach(function (button, i) {
    // add listener on click to hide the content
    button.addEventListener("click", function () {
        // hide the text below the button
        txtProducts[i].classList.toggle("hidden");
        // add 'closed' class to change the triangle direction
        button.classList.toggle("closed");
    });
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

// -----------------------add to cart------------------------------

// get button and input
const btnCart = document.querySelector(".add-cta");
const qtyCart = document.querySelector(".add-qty").value;
// get number of ducks in the cart
const cartNb = document.querySelector(".cart-nb");

btnCart.addEventListener("click", () => {
    // change button's innerhtml
    btnCart.innerHTML = "Déjà au panier";
    // disable button "add to cart"
    btnCart.disabled = true;
    // number of ducks becomes number of articles inside the cart
    cartNb.textContent = qtyCart;
    if (qtyCart > 99) {
        cartNb.textContent = "99+";
    }
});
console.log(qtyCart);

// let PrevBtn = document.createElement("button");
// btn.innerHTML = "◀️";
// let nextBtn = document.createElement("button");
// btn.innerHTML = "▶️";
