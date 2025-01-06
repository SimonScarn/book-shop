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
    font-weight: 900;
    color: var(--main-color);
    padding-top: 124px;
    font-weight: 700;
    margin-top: 0;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 140px 20px;
    margin-top: 160px;
  }

  &__pagination {
    margin-top: 32px;
    text-align: center;

    button {
      margin: 0 5px;
      padding: 10px 15px;
      border: none;
      background: none;
      color: #6E8484;
      font-weight: normal;
      cursor: pointer;

      &.product-grid__pagination-button--active {
        background-color: var(--main-color);
        color: white;
        font-weight: bold;
      }

      &:hover {
        color: var(--main-color);
      }

      &:disabled {
        color: #e0e0e0;
        cursor: not-allowed;
      }
    }
  }
}


</style>
