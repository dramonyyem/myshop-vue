<template>
    <div class="mx-2 my-2">
        <v-card
        subtitle="Create Product"
        flat
    >
    <v-card-item>
        <form @submit.prevent="addProduct">
            <v-text-field
                v-model="product.name"
              label="Name"
              class="mt-2"
            ></v-text-field>
            <v-text-field
              label="Price"
              class="mt-2"
                v-model="product.price"
            ></v-text-field>

            <v-text-field
              v-model="product.img_url"
              label="Image URL"
              class="mt-2"
        
            ></v-text-field>
            <div class="my-2 mx-2">
                <v-btn
                    type="submit"
                    class="me-4"
                    >
                    submit
                </v-btn>
                <v-btn @click.prevent="clearProduct">
                    clear
                </v-btn>
            </div>

        </form>
    </v-card-item>

    </v-card>
    </div>
</template>
<script setup>

import { ref } from 'vue';


// localStorage.removeItem('all_products');

if(!localStorage.getItem('all_products')){
    localStorage.setItem('all_products', JSON.stringify([]));
    console.log('all product not created and ready create')
}else{
    console.log('all product created')
}

const products = ref(JSON.parse(localStorage.getItem('all_products')) || []);

const generateIndex = () => {
    const lsProduct = products.value;
    let index = lsProduct.length + 1;
    return index;
};

const product = ref({
    id: generateIndex(),
    name: null,
    price: null,
    img_url : null    
});


const addProduct = () => {
    const lsProduct = products;
    // console.log(lsProduct);
    lsProduct.value.push(product.value);
    localStorage.setItem('all_products', JSON.stringify(lsProduct.value));
    console.log('success');
    clearProduct();
}

const clearProduct = () => {
    product.value = {
        id: null,
        name: null,
        price: null,
        img_url: null,
    }
}

</script>

<style lang="scss" scoped>

</style>