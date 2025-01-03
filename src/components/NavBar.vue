<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';
import CartPanel from './CartPanel.vue';

const cartStore = useCartStore();

const toggleCart = () => {
  cartStore.toggleCart();
};

const totalCartItems = computed(() =>
  cartStore.cartItems.reduce((total, item) => total + item.quantity, 0)
);
</script>

<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar__left">
        <img class="navbar__logo" alt="navbar logo" src="./../assets/logo.png" />
      </div>

      <nav class="navbar__links">
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
</template>

<style lang="scss">
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 90px;
  margin: auto;
  z-index: 100;
  padding: 0 20px;

  &__logo {
    height: 44px;
  }

  &__links {
    flex-grow: 1;
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
        font-weight: 600;
        color: #2e3838;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          cursor: pointer;
          color: #0a655e;
        }
      }
    }
  }

  &__right {
    display: flex;
    gap: 26px;
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
        background: #0a655e !important;
      }
    }
  }

  &__icon--cart {
    position: relative;

    .navbar__cart-badge {
      position: absolute;
      top: -8px;
      right: -12px;
      background-color: #0a655e;
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
}

@media (max-width: 1024px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .navbar__links .navbar__list {
    flex-direction: column;
    gap: 1rem;
    margin-top: 10px;
  }

  .navbar__right {
    margin-top: 10px;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 10px;
  }

  .navbar__links .navbar__list {
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 5px;
  }

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
</style>
