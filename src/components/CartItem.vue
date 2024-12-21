<template>
     <NavMenuItem />
     <div class="justify-content mx-auto" style="min-height: 300px;width: 80%;">
    <v-row style="min-height: 300px;">
        <v-col cols="12" :lg="itemInsideCart !== 0 ? 8 : 12" sm="6">
            <v-card
                class="mx-2 my-2"
                min-height="200"
                title="Cart"
                subtitle="List Of Order"
                v-if="itemInsideCart != 0">

                <!-- <h1 class="mx-2">Cart</h1>
                <h3 class="mx-2 my-2 text-grey-lighten-1">List of Order</h3> -->

                <v-divider></v-divider>
                <v-table class="my-4 mx-4" style="min-height: 300px;">
                    <thead >
                        <tr>
                            <th class="text-left">
                            Product
                            </th>
                           
                            <th class="text-left">
                            Price Per Unit
                            </th>
                            <th class="text-left">
                            QTY
                            </th>
                            <th class="text-left">
                            Price
                            </th>
                            <th class="text-left">
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="item in outputCart"
                        :key="item.id"
                    >
                        <td>
                            <v-row>
                                <v-col lg="3" sm="12" md="12">
                                    <v-img
                                    height="60"
                                    width="60"
                                    class="my-2"
                                    :src='checkItem(item.id).img_url'
                                    >
                                    </v-img>
                                </v-col>
                                <v-col lg="9" md="12">
                                    <h3 class="text-left my-4" >
                                        Product {{ item.id }}
                                    </h3>
                                </v-col>
                            </v-row>
                          </td>
                          <td>$ {{ checkItem(item.id).price }}</td>
                          <td>x{{ item.qty }}</td>

                        <td>$ {{ checkItem(item.id).price * item.qty }}</td>

                        <td>
                            <v-btn color="red" @click="removeCartItem(item.id)">
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </td>
                    </tr>
                    <v-divider></v-divider>

                    </tbody>
                    
                </v-table>
                <v-divider></v-divider>
                <div class="d-flex flex-row-reverse" >
                    <div class="mx-4" style="width: 69%;">
    
                        <v-row class="my-2">
                        <v-col cols="4">
                            Subtotal:
                        </v-col>
                        <v-col class="text-right">
                            $ {{ generateTotalPrice }}
                        </v-col>
                        
                    </v-row>
                    <v-row class="my-2">
                        <v-col cols="4">
                            Discount:
                        </v-col>
                        <v-col class="text-right">
                            Discount
                        </v-col>
                        <v-divider></v-divider>
                    </v-row>
                    <v-row class="my-2">
                        <v-col cols="4">
                            <h2>Total: </h2>
                        </v-col>
                        <v-col class="text-right">
                            <h2>
                                $ {{ generateTotalPrice }}
                            </h2>
                        </v-col>
                        
                    </v-row>
                </div>
                </div>
            </v-card>
            <v-card 
                class="mx-2 my-2"
                min-height="200"
                title="Cart"
                subtitle="List Of Order"
            v-else>
            <v-divider></v-divider>
                <div class="text-center my-4" >
                    No Product In Cart
                </div>
            </v-card>
        </v-col> 
        <v-col cols="12" lg="4" sm="6" v-if="itemInsideCart != 0">
            <v-divider></v-divider>
            <v-card
                class="mx-2 my-2"
                elevation="16"
                min-height="250"
                title="Payment Info."
                subtitle="Payment Detail"
            >
            <v-divider></v-divider>
            <v-list>
                <v-list-item>
                    Payment Method
                    <div class="mx-2 my-2">
                    <input type="radio" name="payment_method" value="ABA">
                    <label for="" class="mx-2"> <v-icon>mdi-credit-card</v-icon>  VISA</label>
                   </div>
                   <div class="mx-2">
                       <input type="radio" name="payment_method" value="Stripe" checked>
                       <label for="" class="mx-2"><v-icon>mdi-credit-card</v-icon> Stripe</label>
                   </div>

                </v-list-item>
                <v-list-item class="mt-2">
                    Card Name
                    <v-text-field
                        class="my-2"
                        placeholder="Enter card Name"
                    ></v-text-field>
                </v-list-item>
                <v-list-item>
                    Card Number
                    <v-text-field
                        class="my-2"
                        placeholder="xxx xxx xxxx"
                    ></v-text-field>
                </v-list-item>

                <v-list-item>
                    Card Expired Date
                    <v-row class="my-2">
                        <v-col>
                            <v-text-field
                                
                            placeholder="MM"></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                
                            placeholder="YYYY"></v-text-field>
                        </v-col>
                    </v-row>
                </v-list-item>


            </v-list>

            <div class="mx-2 my-2">
                <v-btn color="red-lighten-2" block>Check Out</v-btn>
            </div>

            </v-card>
        </v-col> 
    </v-row>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';

const lsProduct = ref(JSON.parse(localStorage.getItem('all_products')) || [])
// objectCart.splice(2, 1);
const cart = ref(JSON.parse(localStorage.getItem('cartItem')) || []);

const outputCart = computed(() => {
    return cart.value;
});

const itemInsideCart = computed(() => {
    return cart.value.length;
});

const removeCartItem = (id) => {
    let index = cart.value.findIndex(c => c.id === id);
    if(index !== 1){
        cart.value.splice(index, 1);
        localStorage.setItem('cartItem', JSON.stringify(cart.value));
    }
};
const checkItem = (id) => {
    let index = lsProduct.value.findIndex(p => p.id === id);
    return lsProduct.value[index];
};

const generateTotalPrice = computed(() => {
    let totalAmount = 0;
    for(let i = 0; i < cart.value.length; i++){
        totalAmount += (cart.value[i].qty)*checkItem(cart.value[i].id).price;
    }
    return totalAmount;
})
</script>

<style lang="scss" scoped>

</style>