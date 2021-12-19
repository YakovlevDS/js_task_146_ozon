'use strict';

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseModal = cartModal.querySelector('.cart-close');

  const openCart = event => {
    event.preventDefault();
    cartModal.style.display = 'flex';
  };

  const closeCart = () => {
    cartModal.removeAttribute('style');
  };

  cartBtn.addEventListener('click', openCart);
  cartCloseModal.addEventListener('click', closeCart);
};

export default cart;
