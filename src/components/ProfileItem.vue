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
                    title="Profile"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
                    color="red-lighten-2"
                >
                </v-card>
            </v-col> 
        </v-row>
    </div>

</template>

<script setup>
import SubMenuItem from './SubMenuItem.vue';


</script>

<style lang="scss" scoped>

</style>