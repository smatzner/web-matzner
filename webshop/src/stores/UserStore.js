import {defineStore} from "pinia";
import {computed, ref} from "vue";
import axios from "axios";


export const useUserStore = defineStore('user', () => {
    const baseUri = 'https://abhditnhef.webshop.asw.rest/'
    const user = ref(null)
    const isLoggedIn = computed(() => !!user.value)
    const isAdmin = computed(() => user.value?.role === 'admin')
    const isUser = computed(() => user.value?.role === 'user')
    function createAxiosHeader() {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }

    async function register(user) {
        const response = await axios.post(baseUri + 'api/auth/register', user, createAxiosHeader())

        user.value = response.data.user

        localStorage.setItem('token', response.data.jwt)

        // TODO: check if user exists

    }

    async function checkIfLoggedIn() {
        user.value = 'pending';
        try{
            const response = await axios.get(baseUri + 'api/auth', createAxiosHeader())
            user.value = response.data.user
        } catch (error) {
            console.error(error)
            user.value = '';
        }
    }

    async function login( loginUser) {
        try {
            const response = await axios.post(baseUri + 'api/auth/login', loginUser, createAxiosHeader())
            user.value = response.data.user
            localStorage.setItem('token', response.data.jwt)
        } catch (error) {
            throw error
        }
    }

    function logout(){
        user.value = null
        localStorage.removeItem('token')
    }

    return {
        user,
        isLoggedIn,
        isAdmin,
        isUser,
        register,
        checkIfLoggedIn,
        login,
        logout
    }

})