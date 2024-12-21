import { ref } from "vue";


const products = JSON.parse(localStorage.getItem('all_products')) || [];

export function hello(){
    return null;
}

export function findProductItem(products, id) {
    return products.find(p => p.id === id);

    // console.log(products.findIndex((p) => p.id === id));
    // const item = products.value.findIndex();
    // console.log(index);
    // console.log(products.value[0]);
    // return products.value[index];
}