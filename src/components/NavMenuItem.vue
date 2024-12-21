<template>
    <div class="d-flex justify-center" style="margin-top: 50px;">
      <router-link to="/">
        <v-btn size="x-large" class="mx-2" :color="checkActive('/') ? 'red-lighten-2' : ''">
          <v-icon :color="checkActive('/') ? '' : 'grey-lighten-1'">
            mdi-home
          </v-icon>
        </v-btn>
    </router-link>
    <router-link to="/product" >
      <v-btn size="x-large" class="mx-2" :color="checkActive('/product') ? 'red-lighten-2' : ''">
        <v-icon :color="checkActive('/product') ? '' : 'grey-lighten-1'">
          mdi-widgets
        </v-icon>
      </v-btn>
    </router-link>
    <!-- <v-btn size="x-large" class="mx-2" value="menu" href="/profile">
      <v-icon color="grey-lighten-1">
        mdi-account 
      </v-icon>
    </v-btn> -->
    <router-link to="/cart">

    <v-btn size="x-large" class="mx-2" :color="checkActive('/cart') ? 'red-lighten-2' : ''"> 
      <v-icon :color="checkActive('/cart') ? '' : 'grey-lighten-1'">
         mdi-cart
      </v-icon>
    </v-btn>  
    </router-link>
  </div>
  <div class="d-flex justify-center mt-2" style="margin-bottom: 50px;" >
    <router-link to="/profile">
      <v-btn size="x-large" class="mx-2" :color="checkActive('/profile') ? 'red-lighten-2' : ''" > 
        <v-icon :color="checkActive('/profile') ? '' : 'grey-lighten-1'">
          mdi-account
        </v-icon>
      </v-btn>  
    </router-link>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const checkActive = (path) => {
  // Handle the exact match for '/'
  if(path === '/'){
    return route.path === '/';
  }
  // For other paths, check if the current path starts with the provided path
  return route.path.startsWith(path);
};
// Computed property to check if the current route matches the given path

</script>

<style lang="scss" scoped>

</style>