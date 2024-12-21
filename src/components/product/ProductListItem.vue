<template>
    <div class="mx-2 my-2">
        <v-card
        subtitle="List Of Product"
        flat
    >
        <template v-slot:append>
            <v-btn @click="addProduct" color="red-lighten-2">
                Create
            </v-btn>
        </template>
      <template v-slot:text>
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </template>
  
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        item-value="name"
      >
        <template v-slot:item.actions="{ item }">
            <v-btn color="red-lighten-2" @click="selectProduct(item)">
                <v-icon>
                    mdi-eye
                </v-icon>
                <span class="mx-2">
                    View
                </span>
            </v-btn>
        </template>
        </v-data-table> 
    </v-card>
    </div>
    
</template>

<script setup>
import { ref, inject } from 'vue';

const setProductDetail = inject('setProductDetail');  // Inject the function to set the selected product
const createProduct = inject('createProduct');
const lsProduct = ref(JSON.parse(localStorage.getItem('all_products')) || [])

console.log(lsProduct.value);
const search = ref('');
const headers = ref([
    { key: 'id', title: 'ID' },
    {
        align: 'start',
        key: 'name',
        sortable: false,
        title: 'Name'
    },
    { key: 'price', title: 'Price' },
    {  key: 'actions',title: 'Actions', sortable: false, align: 'center'  },
]);

const desserts = lsProduct;

const selectProduct = (item) => {
  setProductDetail(item);  // Call the injected function to pass the selected product to the parent
};

const addProduct = () => {
  createProduct();
};
</script>

<style lang="scss" scoped>

</style>