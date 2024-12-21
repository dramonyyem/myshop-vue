<template>
<NavMenuItem />
<div class="justify-content mx-auto" style="min-height: 300px;width: 70%;">
    <v-row>
        <v-col cols='8'>
            <h1>Payment Information</h1>
            
            <div style="width: 80%;" class="my-4">
                Card Information
                <v-text-field
                    hide-details="auto"
                    label="Card Name"
                    ></v-text-field>
                    
                <v-text-field
                    hide-details="auto"
                    label="Card Name"
                    ></v-text-field>
            </div>
        </v-col>
        <v-col cols='4'>
            Your Order
            <v-divider></v-divider>
            <v-row class="my-2" v-for="item in outputCart">
                <v-col cols="4">
                    <v-img
                        lazy-src="https://studentprojects.gteckannur.com/vishnuppddm3/wp-content/uploads/2024/06/men-plain-shirts-men-shirt.jpg"
                            src="https://studentprojects.gteckannur.com/vishnuppddm3/wp-content/uploads/2024/06/men-plain-shirts-men-shirt.jpg"
                            height="100"
                            width="100"
                        >

                        </v-img>
                </v-col>
                <v-col>
                    <div style="text-align: left;">
                       <h3>Product {{ item.id }}</h3>
                       <h3>Qty x{{ item.qty }}</h3>

                    </div>
                </v-col>
                <v-divider></v-divider>

            </v-row>
            <v-row class="my-2">
                <v-col cols="4">
                    Subtotal
                </v-col>
                <v-col class="d-flex flex-row-reverse">
                    Subtotal
                </v-col>
                
            </v-row>
            <v-row class="my-2">
                <v-col cols="4">
                    Shipping
                </v-col>
                <v-col class="d-flex flex-row-reverse">
                    Shipping
                </v-col>
                
            </v-row>
            <v-row class="my-2">
                <v-col cols="4">
                    Discount
                </v-col>
                <v-col class="d-flex flex-row-reverse">
                    Discount
                </v-col>
                <v-divider></v-divider>
                
            </v-row>
            <v-row class="my-2">
                <v-col cols="4">
                    <h1>Total : </h1>

                </v-col>
                <v-col class="d-flex flex-row-reverse">
                    <h1>
                        $100.00
                    </h1>
                </v-col>
                
            </v-row>

        </v-col>
    </v-row>
</div>
</template>

<script setup>
import { ref, computed } from 'vue';


// objectCart.splice(2, 1);
const cart = ref(JSON.parse(localStorage.getItem('cartItem')) || []);

const outputCart = computed(() => {
    return cart.value;
});

</script>

<style lang="scss" scoped>

</style>