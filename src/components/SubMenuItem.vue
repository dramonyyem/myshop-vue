<template>
    <v-list class="bg-red-lighten-2">
        <v-list-subheader color="white">User</v-list-subheader>

        <v-list-item to="/profile">
            <v-icon>
                mdi-account
            </v-icon> 
            <span>
                Profile
            </span>
        </v-list-item>
        <v-list-item to="/profile/product">
            <v-icon>
                mdi-widgets
            </v-icon> 
            <span>
                Product
            </span>
        </v-list-item>
    </v-list>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>