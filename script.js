// Hide content on click
const contentProduct = document.querySelector(".product-acrd-lnk");
const txtProduct = document.querySelector(".product-txt");
contentProduct.addEventListener("click", function (e) {
    txtProduct.classList.toggle("hidden");
    // contentProduct.classList.toggle("product-acrd-lnk.closed::after");
});
console.log(txtProduct);
