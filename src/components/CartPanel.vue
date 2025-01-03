<script setup>
import { useCartStore } from '../stores/cartStore';
import CartRow from './CartRow.vue';

const cartStore = useCartStore();

const closeCart = () => {
  cartStore.toggleCart();
};
</script>

<template>
  <div class="cart-panel" :class="{ 'cart-panel--open': cartStore.isCartOpen }">
    <div class="cart-panel__header">
      <span>Twój koszyk</span>
      <button class="cart-panel__btn-close" @click="closeCart"><img src="./../assets/icons/cancel.png" /></button>
    </div>
    <div class="cart-panel__items">
      <p v-if="cartStore.cartItems.length === 0" class="cart-panel__empty-message">Koszyk pusty</p>
      
      <CartRow 
        v-for="item in cartStore.cartItems" 
        :key="item.id" 
        :item="item" 
        @remove="cartStore.removeFromCart(item.id)" 
      />
    </div>
    <div class="cart-panel__divider" v-if="cartStore.cartItems.length > 0"></div>
    <div class="cart-panel__footer" v-if="cartStore.cartItems.length > 0">
      <div class="cart-panel__footer-top">
        <span><strong>Łączna kwota</strong></span>
        <div>
          <span class="price-big">{{ cartStore.totalPrice }} PLN</span>
          <span class="price-vat">+VAT 23%</span>
        </div>
      </div>
      <div class="cart-panel__footer-bottom">
        <button class="btn-cart">PRZEJDŹ DO KOSZYKA</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-panel {
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  background-color: #fff;
  color: #000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 0 0 16px 16px;
  transition: transform 0.3s ease;
  transform: translateY(-100%);

  &--open {
    transform: translateY(0);
    top: 90px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn-close {
    width: 40px;
    height: 40px;
    background: #0A655E;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  &__items {
    margin-top: 16px;
    padding-right: 16px;
    overflow-y: auto;
    max-height: 32vh;
    height: auto;
  }

  &__empty-message {
    text-align: center;
    font-size: 16px;
    color: #2E3838;
    font-weight: 600;
  }

  &__divider {
    border-top: 1px solid #bbd0d0;
    margin-top: 20px;
    margin-left: -16px;
  }

  &__footer {
    padding: 25px 16px 12px 16px;

    &-top {
      display: flex;
      justify-content: space-between;

      strong {
        font-weight: 600;
      }

      div {
        display: flex;
        flex-direction: column;
      }
    }

    .btn-cart {
      width: 100%;
      margin-top: 12px;
      padding: 16px;
      background: #D1B352 0% 0% no-repeat padding-box;
      color: #fff;
      letter-spacing: 2.4px;
      border: none;
    }

    .price-big {
      font-size: 22px;
      font-weight: 600;
    }

    .price-vat {
      margin: auto;
      font-size: 14px;
      color: #2E3838;
    }
  }
}
</style>
