import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "axios";
import {useProductStore} from "@/stores/ProductStore";

export const useBasketStore = defineStore('basket', () => {
    const baseUri = 'https://abhditnhef.webshop.asw.rest/'
    const basket = ref()
    const items = computed(() => basket.value.items)
    const productsInBasket = ref([])

    function createAxiosHeader() {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }

    async function addProductToBasket(basketItem) {
        try {
            const response = await axios.post(baseUri + 'api/baskets/item', basketItem, createAxiosHeader())
            basket.value = response.data
            loadProductsInBasket()
        } catch (error) {
            throw error
        }
    }

    async function loadBasket() {
        try {
            const response = await axios.get(baseUri + 'api/baskets', createAxiosHeader())
            basket.value = response.data
        } catch (error) {
            throw error
        }

        loadProductsInBasket()
    }

    function loadProductsInBasket() {
        const productStore = useProductStore()

        const products = []
        productStore.products.forEach(product => {
            items.value.forEach(item => {
                if (product.productId === item.productId) {
                    products.push({
                        productId: product.productId,
                        title: product.title,
                        amount: item.amount,
                        unitPrice: product.price,
                        totalPrice: product.price * item.amount,
                        remark: item.remark,
                    })
                }
            })
        })


        productsInBasket.value = products
    }

    function resetBasket() {
        productsInBasket.value = null
        basket.value = null
    }

    return {
        baskets: basket,
        items,
        addProductToBasket,
        loadBasket,
        loadProductsInBasket,
        productsInBasket,
        resetBasket
    }
})