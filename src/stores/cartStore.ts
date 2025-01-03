import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    isCartOpen: false,
    cartItems: [],
  }),
  getters: {
    totalCartItems(state) {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
  actions: {
    openCart() {
      this.isCartOpen = true;
    },
    closeCart() {
      this.isCartOpen = false;
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart(product) {
  console.log('propssxxx', product)

      const existingProduct = this.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
  },
});
