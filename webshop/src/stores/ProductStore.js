import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useProductStore = defineStore('product',() => {
    const products = ref([])

    async function loadProducts(){
        const productResponse = await axios.get('https://abhditnhef.webshop.asw.rest/api/products')
        products.value = productResponse.data
    }

    return{
        products,
        loadProducts
    }
})