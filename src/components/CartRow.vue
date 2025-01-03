<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: Object,
});

const emit = defineEmits(['remove']);

const removeItem = () => {
  emit('remove', props.item.id);
};
</script>

<template>
  <div class="cart-row">
    <div class="cart-row__description">
      <img :src="item.img" alt="Product image" class="cart-row__item-img" />
      <div class="cart-row__item-details">
        <span class="cart-row__item-title">{{ item.name }}</span>
        <button class="cart-row__remove-btn" @click="removeItem">
          <img src="../assets/icons/trash.svg" alt="Trash" />
        </button>
      </div>
    </div>
    <div class="cart-row__item-price">
      <span>Cena</span>
      <span>{{ item.price }} PLN</span>
    </div>
    <div class="cart-row__item-quantity">
      Ilość: {{ item.quantity }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  padding: 9px;
  background: #F1F5F5 0% 0% no-repeat padding-box;

  &__description {
    display: flex;
  }

  &__item-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  &__item-details {
    padding-bottom: 9px;
    margin-bottom: 9px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item-title {
    flex: 1;
    color: #0A655E;
    margin-left: 10px;
    font-weight: 500;
  }

  &__remove-btn {
    background: none;
    border: none;
    cursor: pointer;
  }

  &__item-price {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
      font-size: 14px;
      color: #888;
    }

    span:last-child {
      font-size: 18px;
      font-weight: bold;
    }
  }

  &__item-quantity {
    margin-top: 8px;
    color: #555;
    font-size: 14px;
  }
}
</style>
