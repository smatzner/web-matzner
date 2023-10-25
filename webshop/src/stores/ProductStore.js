import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useProductStore = defineStore('product', () => {
    const baseUri = 'https://abhditnhef.webshop.asw.rest/'
    const products = ref([])

    function createAxiosHeader() {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }

    async function loadProducts() {
        const response = await axios.get(baseUri + 'api/products/')
        products.value = response.data
    }

    async function addProduct(newProduct) {
        const response = await axios.post(baseUri + 'api/products/', newProduct, createAxiosHeader())
        products.value += response.data
    }

    return {
        products,
        loadProducts,
        addProduct
    }
})