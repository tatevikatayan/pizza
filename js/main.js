const cartButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", function(event){
    modal.classList.add("is-opened"); 
});
close.addEventListener("click", function(event){
    modal.classList.remove("is-opened");
});
new WOW().init();

