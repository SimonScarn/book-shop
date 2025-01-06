<script setup>
import { computed, ref } from 'vue';
import { useCartStore } from '../stores/cartStore';
import CartPanel from './CartPanel.vue';

const cartStore = useCartStore();
const isMenuOpen = ref(false);

const toggleCart = () => {
  cartStore.toggleCart();
};

const totalCartItems = computed(() =>
  cartStore.cartItems.reduce((total, item) => total + item.quantity, 0)
);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="container">
    <div class="navbar">
      <div class="container">
        <div class="navbar__left">
          <img class="navbar__logo" alt="navbar logo" src="./../assets/logo.png" />
        </div>
        <nav class="navbar__links" :class="{ 'navbar__links--open': isMenuOpen }">
          <ul class="navbar__list">
            <li class="navbar__item"><a class="navbar__link" href="/o-kazusie">O Kazusie</a></li>
            <li class="navbar__item"><a class="navbar__link" href="/o-firmie">O Firmie</a></li>
            <li class="navbar__item"><a class="navbar__link" href="/czasopisma">Czasopisma</a></li>
            <li class="navbar__item"><a class="navbar__link" href="/szkolenia">Szkolenia</a></li>
            <li class="navbar__item"><a class="navbar__link" href="/baza-wiedzy">Baza Wiedzy</a></li>
            <li class="navbar__item"><a class="navbar__link" href="/kazus-tv">Kazus TV</a></li>
            <li class="navbar__item"><a class="navbar__link" href="/kontakt">Kontakt</a></li>
          </ul>
        </nav>
        <div class="navbar__right">
          <span class="navbar__icon navbar__icon--burger" @click="toggleMenu">
            <img src="./../assets/icons/burger.svg" alt="burger menu" />
          </span>
          <span class="navbar__icon navbar__icon--search">
            <img src="./../assets/icons/search.svg" alt="search icon" />
          </span>
          <span class="navbar__icon navbar__icon--user">
            <img src="./../assets/icons/user.svg" alt="user icon" />
          </span>
          <span class="navbar__icon navbar__icon--cart" @click="toggleCart">
            <img src="./../assets/icons/cart.svg" alt="cart icon" />
            <span v-if="totalCartItems > 0" class="navbar__cart-badge">{{ totalCartItems }}</span>
          </span>
        </div>
      </div>
    <CartPanel />

    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 90px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 120;
  padding: 0;
  border-bottom: 1px solid #F1F5F5;

  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px; 
  }

  &__logo {
    height: 44px;
    @media (max-width: 1024px) {
      height: 30px;
    }
  }

  &__links {
    display: flex;
    justify-content: center;

    .navbar__list {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      gap: 1.5rem;

      .navbar__item {
        display: inline;
      }

      .navbar__link {
        font-size: 16px;
        color: #2e3838;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          cursor: pointer;
          color: var(--main-color);
        }
      }
    }

    &--open {
      display: block;
      position: absolute;
      top: 90px;
      left: 0;
      width: 100%;
      background-color: white;
      padding: 20px;
      z-index: 99;

      @media (max-width: 1024px) {
        top: 60px;
      }

      .navbar__list {
        flex-direction: column;
        gap: 1rem;
        padding: 0;
        margin: 0;
      }

      .navbar__item {
        display: block;
      }
    }
  }

  &__right {
    display: flex;
    gap: 32px;
  }

  &__icon {
    display: grid;
    place-content: center;

    &:hover {
      cursor: pointer;
    }

    &--search {
      position: relative;
      z-index: 1;
      margin-right: 5px;

      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%;
        height: 100%;
        border-radius: 100px;
        height: 40px;
        width: 40px;
        background: var(--main-color) !important;
      }
    }

    &--cart {
      position: relative;

      .navbar__cart-badge {
        position: absolute;
        top: -8px;
        right: -12px;
        background-color: var(--main-color);
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &--burger {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    height: 60px;
    padding: 0;

    .navbar__links:not(.navbar__links--open) {
      display: none;
    }

    .navbar__icon--burger {
      display: grid;
    }
  }

  @media (max-width: 480px) {
    padding: 0 5px;

    .navbar__logo {
      height: 36px;
    }

    .navbar__links .navbar__list {
      gap: 0.6rem;
    }

    .navbar__icon {
      gap: 10px;
    }
  }
}

</style>
