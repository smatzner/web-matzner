import {defineStore} from "pinia";
import {computed, markRaw, ref} from "vue";
import axios from "axios";
import {useProductStore} from "@/stores/ProductStore";

export const useBasketStore = defineStore('basket', () => {
    const baseUri = 'https://abhditnhef.webshop.asw.rest/'
    const basket = ref([])
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
            const product = productsInBasket.value.find(product => product.productId === basketItem.productId)
            if (product) {
                basketItem.amount += product.amount
            }
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

    async function updateBasketItem(productId, basketItem) {
        try {
            const response = await axios.put(baseUri + 'api/baskets/item/' + productId, basketItem, createAxiosHeader())
            basket.value = response.data
            await loadProductsInBasket()
        } catch (e) {
            console.error(e)
        }
    }

    async function deleteBasketItem(productId) {
        try {
            const response = await axios.delete(baseUri + 'api/baskets/item/' + productId, createAxiosHeader())
            basket.value = response.data
            await loadProductsInBasket()
        } catch (e) {
            console.error(e)
        }
    }

    async function addDeliveryInfo(deliveryInfo) {
        try {
            const response = await axios.put(baseUri + 'api/baskets', deliveryInfo, createAxiosHeader())
            basket.value = response.data
        } catch (e) {
            throw e
        }
    }

    async function sendOrder() {
        try {
            if (items.value) {
                // Das macht nix im Backend 👇
                await axios.post(baseUri + 'api/baskets/order', '', createAxiosHeader())
            }
        } catch (e) {
            console.error(e)
        }
    }
w
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

    async function resetBasket() {
        const response = await axios.delete(baseUri + 'api/baskets', createAxiosHeader())
        basket.value = response.data
        productsInBasket.value = []
    }

    return {
        basket,
        items,
        addProductToBasket,
        loadBasket,
        loadProductsInBasket,
        productsInBasket,
        resetBasket,
        updateBasketItem,
        deleteBasketItem,
        addDeliveryInfo,
        sendOrder
    }
})