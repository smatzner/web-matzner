import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreateView from "@/views/CreateView.vue";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/create',
        component: CreateView
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export{router}