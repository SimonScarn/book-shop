<script setup>
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
</script>

<template>
  <div class="overlay" :class="{ active: cartStore.isCartOpen }" @click="cartStore.closeCart"></div>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
