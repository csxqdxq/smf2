import {createRouter,createWebHistory} from 'vue-router'
import Login from "@/components/login/login.vue";

const routes = [
    {
        path:'/',
        name:'home',
        component:Login
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export
default router