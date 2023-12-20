const $ = (selector) => document.querySelector(selector);

const cartSideBar = document.querySelector('#cart-sidebar');

const init = () => {
  toggleCartSidebar();
};

const toggleCartSidebar = () => {
  $('.header-cart').addEventListener('click', () => {
    cartSideBar.style.display = 'block';
  });

  $('#close-cart').addEventListener('click', () => {
    cartSideBar.style.display = 'none';
  });
};

init();
