<template>
  <NavMenuItem />
  <div class="justify-content mx-auto" style="min-height: 300px;width: 80%;">

    <div class="mx-4 my-3">
      <h1 class="my-2">
        <v-icon>
          mdi-information	
        </v-icon>
          Products
      </h1>
      <v-divider></v-divider>
  
    </div>
      <v-row style="min-height: 300px;">
          <v-col cols="12" lg="3" sm="6" v-for="prod in paginateData" :key="prod.id">
           <v-hover>
            <template v-slot:default="{ isHovering, props }">
             <v-card
                  v-bind="props"
                  :color="isHovering ? 'red-lighten-2' : ''"
                  class="mx-2 my-2"
                  elevation="16"
                  min-height="480"
                  hover
                  :to="'/product/'+prod.id"
             >
             <v-img
                 class="my-4 mx-4"
                 :lazy-src="prod.img_url"
                 :src="prod.img_url"
                 height="250"
                 cover
               ></v-img>
       
               <v-card-item>
                    <v-card-title>
                    {{ prod.name }}
                  </v-card-title>
                 <v-rating
                     hover
                     :length="5"
                     :size="32"
                     :model-value="5"
                     active-color="danger"
                 />
                 <br>
                 <h3>Price : ${{ prod.price }}</h3>
                 <!-- <h3>Discount</h3> -->
  
               </v-card-item>
               <!-- <v-divider></v-divider>
               <div class="mx-auto my-4" style="width: 90%;">
                 <v-btn height="48" style="width: 25%;" class="mr-3" :color="isHovering ? '' : 'red-lighten-2'" @click="addItemIntocart(prod.id)">
                   <v-icon>
                     mdi-cart
                   </v-icon>
                 </v-btn>
                 <v-btn height="48" style="width: 70%;" :color="isHovering ? '' : 'red-lighten-2'"
                  :href="'/product/'+prod.id"
                 >
                   View
                 </v-btn>
               </div>
   -->
  
             
             <!-- <div class="d-flex justify-center">
               <v-btn @click="addItemIntocart(prod.id)">Order</v-btn>
             </div> -->
            </v-card>
            </template>
           </v-hover>
          </v-col> 
      </v-row>
      <!-- <v-btn @click="currentPage--" :disabled="currentPage === 1" >Previous</v-btn> -->
      <div class="d-flex justify-center" style="margin-top: 100px;margin-bottom: 50px;">
          <!-- <v-btn @click="previousPage" class="mx-2">Previous</v-btn> -->
          <v-btn @click="nextPage" 
            class="btn-lg mx-4"                 
            color="red-lighten-2"        
          >Next</v-btn>
      </div>
  </div>

</template>

<script setup>
import { ref, computed, provide } from 'vue'
import MenuLayout from './MenuLayout.vue';
import CartItem from './CartItem.vue';
import { useRouter } from 'vue-router';


const lsProduct = ref(JSON.parse(localStorage.getItem('all_products')) || [])

const itemPerpage = 8;
let currentPage = ref(1);

const ItemCart = ref([]);

const router = useRouter();
const products = lsProduct.value;
// const data = JSON.stringify(products);
// localStorage.setItem('products', data);

const totalPage = computed(() => {
    return Math.ceil(products.length / itemPerpage);
});

const paginateData = computed(() => {
  const start = (currentPage.value - 1) * itemPerpage;
  const end = currentPage.value * itemPerpage;
  return products.slice(start, end);
});

// localStorage.removeItem('cartItem');
if(!localStorage.getItem('cartItem')){
  localStorage.setItem('cartItem', JSON.stringify([]));
}
const addItemIntocart = (id) => {
  const cartItem = JSON.parse(localStorage.getItem('cartItem'));
  const itemExist = cartItem.find((itm) => itm.id === id);
  if(!itemExist){
    cartItem.push({
      id: id,
      qty: 1
    });
  }else{
    itemExist.qty = itemExist.qty+1;
  }
  const data = JSON.stringify(cartItem);
  localStorage.setItem('cartItem', data);
};
const nextPage = () => {
  currentPage.value++
};

const CheckOut = (id) => {
  console.log(id);
};

const productDetail = (id) => {
  router.push({ name: 'product', params: { id } });

}; 

const testing = () => {
  alert('check out');
}
</script>
<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>