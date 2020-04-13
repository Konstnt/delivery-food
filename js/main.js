const cartButton = document.querySelector('#cart-button');
const stickyCartButton = document.querySelector('#sticky-cart');
const modal = document.querySelector (".modal");
const cartClose = document.querySelector (".close");

cartButton.addEventListener('click', togglemodal);
cartClose.addEventListener('click', togglemodal);
stickyCartButton.addEventListener('click', togglemodal);


function togglemodal() {
  modal.classList.toggle('cart-open')
}

new WOW().init();

// логика появления кнопки коризны
function magic() {
  if (window.pageYOffset > 59) {
    stickyCartButton.classList.remove('hidden')
  } else { stickyCartButton.classList.add('hidden') }
}
//

// When scrolling, we run the function
window.onscroll = magic