import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";

export const useProductStore = defineStore('product', () => {
    const baseUri = 'https://abhditnhef.webshop.asw.rest/'
    // const baseUri = 'https://gjpvdsudkw.webshop.asw.rest/'
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

    async function loadProductById(productId) {
        const response = await axios.get(baseUri + 'api/products/' + productId)
        const product = products.value.find(product => product.productId === response.data.productId)
        if (product === undefined) {
            products.value.push(response.data)
        }
    }

    async function addProduct(newProduct) {
        try {
            console.log(products.value)
            const response = await axios.post(baseUri + 'api/products/', newProduct, createAxiosHeader())
            products.value += response.data
        } catch (error) {
            throw error
        }
    }

    async function updateProduct(productId, updatedProduct) {
        try {
            const response = await axios.put(baseUri + 'api/products/' + productId, updatedProduct, createAxiosHeader())
            const productIndex = products.value.findIndex(product => product.productId === productId)
            products.value.splice(productIndex, 1, response.data)
        } catch (error) {
            throw error
        }
    }

    async function deleteProduct(productId) {
        try {
            await axios.delete(baseUri + 'api/products/' + productId, createAxiosHeader())
            const productIndex = products.value.findIndex(product => product.productId === productId)
            products.value.splice(productIndex, 1)
        } catch (error) {
            throw error
        }
    }

    return {
        products,
        loadProducts,
        loadProductById,
        addProduct,
        updateProduct,
        deleteProduct
    }
})