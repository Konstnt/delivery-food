const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector (".modal");
const cartClose = document.querySelector (".close");

cartButton.addEventListener('click', togglemodal);
cartClose.addEventListener('click', togglemodal);

function togglemodal() {
  modal.classList.toggle('cart-open')
}

new WOW().init();