<script setup>
import { defineProps } from 'vue';
import { useCartStore } from '../stores/cartStore';

const props = defineProps({
  product: Object
});

const cartStore = useCartStore();

function handleAddToCart() {
  cartStore.addToCart(props.product);
}
</script>

<template>
  <div class="product-item" @click="handleAddToCart">
    <img :src="product.img" :alt="product.name" />
    <h3 class="product-item__name">{{ product.name }}</h3>
    <p class="product-item__price">{{ product.price.toFixed(2) }} <span>PLN</span></p>
    <p class="product-item__vat">+ VAT 23%</p>
    <p class="product-item__details">SZCZEGÓŁY</p>
  </div>
</template>

<style lang="scss" scoped>
.product-item {
  padding: 15px;
  text-align: center;
  position: relative;
  padding-top: 100px;

  &:hover {
    color: #D1B352;
    outline: 1px solid #D1B352;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 20px 20px 40px #2E383826;
    cursor: pointer;

    .product-item__name,
    .product-item__price,
    .product-item__vat,
    .product-item__details {
      color: #D1B352;
    }
  }
}

.product-item img {
  max-width: 100%;
  height: 190px;
  width: 160px;
  margin-bottom: 10px;
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
}

.product-item {
  &__name,
  p {
    color: #0A655E;
  }
  &__name {
    height: 54px;
    margin-bottom: 0px;
    margin-top: 20px;
    font-size: 18px;
  }
  &__price {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 4px;
    margin-left: -6px;
    font-weight: 700;
    span {
      font-size: 18px;
      margin-left: -4px;
    }
  }
  &__details {
    letter-spacing: px;
  }
  &__vat {
    font-size: 14px;
    margin-bottom: 14px;
  }
}
</style>
