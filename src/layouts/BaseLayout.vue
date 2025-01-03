<template>
  <div class="layout">
    <div class="">
      <header class="navbar">
        <NavBar />
      </header>
      <main>
          <MainPanel/>
          <ProductGrid/>
        <!-- <router-view /> -->
      </main>
      <Overlay />
        </div>
    </div>
</template>

<script setup>
import NavBar from './../components/NavBar.vue';
import Overlay from './../components/Overlay.vue';
import MainPanel from '../components/MainPanel.vue';
import ProductGrid from '../components/ProductGrid.vue';
</script>

<style>
main {
  background: #0A655E;
}
.layout {
  height: 100vh;
}

.navbar {
  background-color: #fff;
  position: relative;
  z-index: 100;

}
</style>
