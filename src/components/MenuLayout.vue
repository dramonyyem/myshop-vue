<template>
  <a href="/product">Product</a>
  |
  <a href="/product">Product</a>
  |
  <a href="/product">Product</a>
  <!-- 
  <div class="justify-content mx-auto" style="min-height: 300px;width: 80%;margin-top: 100px;">
    <component :is='comp'></component>
  </div> -->
</template>
<script setup>
import ProfileItem from './ProfileItem.vue';
import CartItem from './CartItem.vue';
import ProductItem from './ProductItem.vue';
import HomeItem from './HomeItem.vue';
import { ref, provide } from 'vue';

const comp = ref(ProductItem);

const changeComponent = (param) => {
  comp.value = param;
};

</script>

<style lang="scss" scoped>

</style>

