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
          <span class="price-big">
            <span class="price-main">{{ Math.floor(cartStore.totalPrice) }}</span>
            <span class="price-decimal">.{{ (cartStore.totalPrice % 1).toFixed(2).substring(2) }} PLN</span>
          </span>
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
  top: 90px;
  right: calc(calc(calc(100vw - 1200px)/2) - 6px);
  width: 380px;
  background-color: #fff;
  color: #000;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 0 0 16px 28px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  @media (max-width: 1024px) {
    right: 0;
  }

  &--open {
    opacity: 1;
    pointer-events: auto;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin-top: 16px;
      font-weight: 700;
      font-size: 18px;
    }
  }

  &__btn-close {
    width: 40px;
    height: 40px;
    background: var(--main-color);
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover,
    &:active,
    &:focus {
      background: #0a7f75;
    }
  }

  &__items {
    margin-top: 16px;
    padding-right: 28px;
    overflow-y: auto;
    max-height: 32vh;
    height: auto;
  }

  &__divider {
    border-top: 1px solid #bbd0d0;
    margin-top: 20px;
    margin-left: -28px;
  }

  &__footer {
    padding: 26px 32px 12px 6px;

    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
      height: 50px;
      margin-top: 12px;
      padding: 16px;
      background: var(--custom-color) 0% 0% no-repeat padding-box;
      color: #fff;
      letter-spacing: 2.4px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover,
      &:active,
      &:focus {
        background-color: rgb(222, 190, 84);
      }
    }

    .price-big {
      font-size: 22px;
      font-weight: 600;
      display: inline-flex;
      align-items: baseline;

      .price-main {
        font-size: 22px;
        font-weight: bold;
      }

      .price-decimal {
        font-size: 16px;
        margin-left: 2px;
      }
    }

    .price-vat {
      margin: auto;
      font-size: 14px;
    }
  }
}
</style>
