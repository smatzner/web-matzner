import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreateView from "@/views/CreateView.vue";
import DetailView from "@/views/DetailView.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/create', component: CreateView},
    {path: '/persons/:id', component: DetailView}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export {router}