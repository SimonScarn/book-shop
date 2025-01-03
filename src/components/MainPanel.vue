<template>
    <div class="container">
      <div class="main-panel">
        <div class="main-panel__left">
          <h1 class="main-panel__title">Czasopisma</h1>
          <div class="main-panel__description">
            <p>
              <strong>
                Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który tym razem poświęcony jest w dużej części zmianom w podatkach w roku 2019.
              </strong>
            </p>
            <p> Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów używania samochodów osobowych, wprowadzenie „exit tax” czy zmiany dotyczące poboru podatku u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.</p>
          </div>
        </div>
        <div class="main-panel__right">
          <div class="main-panel__image">
            <img src="./../assets/main.png" alt="home image"/>
          </div>
          <div class="main-panel__bg">
            <img src="./../assets/main-bg.svg" alt="bg image"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  .container {
    background: #0A655E;
  }
  
  .main-panel {
    padding: 60px 32px 60px 0;
    display: flex;
    gap: 132px;
  
    &__left {
      width: 50%;
    }
  
    &__title {
      margin-bottom: 32px;
      font-size: 56px;
    }
  
    &__description {
      p:first-of-type {
        margin-bottom: 32px;
      }
  
      strong {
        font-weight: 600;
      }
    }
  
    &__image {
      img {
        position: absolute;
        top: 190px;
        scale: 1.2;
      }
    }
  
    &__bg {
      position: absolute;
      left: -270px;
      bottom: 50px;
    }
  }
  </style>
  