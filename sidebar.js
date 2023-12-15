const headerCart = document.querySelector('.header-cart');
const cartCloseButton = document.querySelector('#close-cart');
const cartSideBar = document.querySelector('#cart-sidebar');

headerCart.addEventListener('click', () => {
  cartSideBar.style.display = 'block';
});

cartCloseButton.addEventListener('click', () => {
  cartSideBar.style.display = 'none';
});
