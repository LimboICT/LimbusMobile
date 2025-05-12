import { db, auth } from './firebase.js';
import { getProductById } from './products.js';

let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(productId, quantity = 1) {
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  
  updateCart();
}

export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

async function updateCartUI() {
  const cartItems = await Promise.all(
    cart.map(async item => ({
      ...item,
      product: await getProductById(item.id)
    }))
  );
  
  // Render cart items
}
