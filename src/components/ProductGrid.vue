<script setup>
import { ref, computed } from 'vue';
import ProductItem from './ProductItem.vue';
import productsData from './../assets/cart.json';

const products = ref(productsData);
const itemsPerPage = 8; 
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(start, start + itemsPerPage);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const getPageNumbers = computed(() => {
  const pageNumbers = [];
  let startPage = Math.max(1, currentPage.value - 2);
  let endPage = Math.min(totalPages.value, currentPage.value + 2);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
});
</script>

<template>
  <div class="product-grid">
    <div class="container">
      <h2 class="product-grid__header">Wyszukaj czasopismo</h2>
      <div class="product-grid__items">
        <ProductItem v-for="product in paginatedProducts" :key="product.name" :product="product" />
      </div>
      <div class="product-grid__pagination">
        <button @click="changePage(currentPage.value - 1)" :disabled="currentPage === 1">
          &lt;
        </button>
        <button
          v-for="page in getPageNumbers"
          :key="page"
          @click="changePage(page)"
          :class="{ 'product-grid__pagination-button--active': page === currentPage }"
        >
          {{ page }}
        </button>
        <button @click="changePage(currentPage.value + 1)" :disabled="currentPage === totalPages.value">
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-grid {
  background: #fff;

  .container {
    padding-bottom: 74px;
  }

  &__header {
    font-size: 42px;
    font-weight: 600;
    color: #0A655E;
    padding-top: 124px;
    font-weight: 700;
    margin-top: 0;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 140px 20px;
    margin-top: 204px;
  }

  &__pagination {
    margin-top: 20px;
    text-align: center;

    button {
      margin: 0 5px;
      padding: 10px 15px;
      border: none;
      background-color: #f0f0f0;
      cursor: pointer;

      &.product-grid__pagination-button--active {
        font-weight: bold;
        background-color: #0A655E;
        color: white;
      }

      &:hover {
        background-color: #0A655E;
        color: white;
      }

      &:disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
      }
    }
  }
}
</style>
