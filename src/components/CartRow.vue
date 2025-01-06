<script setup>
const props = defineProps({
  item: Object,
});

const emit = defineEmits(['remove']);

const removeItem = () => {
  emit('remove', props.item.id);
};

const wholePrice = Math.floor(props.item.price).toString();
const decimalPrice = (props.item.price % 1).toFixed(2).substring(2);
</script>


<template>
  <div class="cart-row">
    <div class="cart-row__description">
      <div class="cart-row__item-img" >
        <img src="././../assets/icons/book.svg" alt="Product image" />
      </div>
      <div class="cart-row__item-details">
        <span class="cart-row__item-title">{{ item.name }}</span>
        <button class="cart-row__remove-btn" @click="removeItem">
          <img src="../assets/icons/trash.svg" alt="Trash" />
        </button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="cart-row__item-price">
      <span>Cena</span>
      <span class="price">
        <span class="price-main">{{ wholePrice }}</span>
        <span class="price-decimal">.{{ decimalPrice }} PLN</span>
      </span>
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
  margin-bottom: 12px;
  padding: 8px;
  background: #F1F5F5 0% 0% no-repeat padding-box;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__description {
    display: flex;
  }

  &__item-img {
    position: relative;
    width: 30px;
    height: 20px;
    object-fit: cover;
    border-radius: 5px;
    z-index: 1;
    margin-top: 12px;
    margin-left: 12px;

    &:after {
      content: '';
      position: absolute;
      top: -14px;
      left: -12px;
      background: #F1F5F5 0% 0% no-repeat padding-box;
      width: 52px;
      height: 52px;
      border-radius: 100px;
      box-shadow: 5px 5px 15px #00585112;
      z-index: -1;
      
    }

  }

  &__item-details {
    padding-bottom: 8px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__item-title {
    flex: 1;
    color: var(--main-color);
    margin-left: 32px;
    font-weight: 600;
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 40px;
  }

  &__remove-btn {
    margin-right: 2px;
    background: none;
    border: none;
    cursor: pointer;
  }

  &__item-price {
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 10px;
    font-size: 14px;
    font-weight: 300;

    .price {
    display: inline-flex;
    align-items: baseline;
    font-weight: bold;


    &-main {
      font-size: 18px;
    }

    &-decimal {
      font-size: 15px;
      margin-left: 2px; 
    }
}
    

 
  }

  &__item-quantity {
    margin-top: 8px;
    margin-left: 10px;
    color: #555;
    font-size: 14px;
  }
}

.divider {
  margin-top: 12px;
  margin-left: -6px;
  width: 110%;
  border-top: 1px solid #e0e7e7;
}
</style>
