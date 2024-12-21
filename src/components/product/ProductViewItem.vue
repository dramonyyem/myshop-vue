<template>
    <NavMenuItem />
      <div class="justify-content mx-auto" style="min-height: 300px;width: 80%;">
        <v-row style="min-height: 300px;">
            <v-col cols="12" lg="3" sm="6">
                <v-card
                    class="mx-2 my-2"
                    elevation="16"
                    height="250"
                    color="red-lighten-2"
                >

               <SubMenuItem />
                </v-card>
            </v-col> 
            <v-col cols="12" lg="9" sm="6">
                <v-card
                    class="mx-2 my-2"
                    elevation="16"
                    min-height="250"
                    title="Product"
                    color="red-lighten-2"
                >

                
                <!-- <v-btn 
                    @click="switchingComponent"
                >

                </v-btn> -->
                <component :is="comp" :product="productItem"></component>
                </v-card>
            </v-col> 
        </v-row>
    </div>

</template>

<script setup>

import { ref,computed, provide } from 'vue';
import SubMenuItem from '../SubMenuItem.vue';
import ProductListItem from './ProductListItem.vue';
import ProductCreateItem from './ProductCreateItem.vue';
import ProductDetailItem from './ProductDetailItem.vue';

const comp = ref(ProductListItem);

const productItem = ref(null);



const createProduct = () => {
    comp.value = ProductCreateItem;
}

const setProductDetail = (item) => {
  productItem.value = item; // Update the product item
  comp.value = ProductDetailItem;  // Switch to ProductDetailItem component
};

// Provide productDetail to child components
provide('setProductDetail', setProductDetail);

provide('createProduct', createProduct);

</script>

<style lang="scss" scoped>

</style>