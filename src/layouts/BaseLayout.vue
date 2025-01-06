<template>
  <div class="layout">
    <div>
      <header class="header">
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

<style lang="scss">
main {
  background: var(--main-color);

  @media(max-width: 1024px) {
    overflow-x: hidden;
  }
}
.layout {
  height: 100vh;
}

.header {
  background-color: #fff;
  position: relative;
  z-index: 120;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media(max-width: 1024px) {
    padding-inline: 16px;
    width: unset;
  }
}
</style>
