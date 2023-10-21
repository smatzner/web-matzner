import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import {router} from "../router";


export const userUserStore = defineStore('user',() => {
    const baseUri = 'https://abhditnhef.webshop.asw.rest/'
    const user = ref({})

    function createAxiosHeader() {
        return {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
    }

    async function registerUser(user){
        const response = await axios.post(baseUri + "api/auth/register", user, createAxiosHeader())

        user.value = response.data.user

        localStorage.setItem('token',response.data.jwt)

        await router.push('/')
    }

    return{
        registerUser
    }

})