import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/home.vue'
import Login from '@/pages/auth/login.vue'
import Register from '@/pages/auth/registar.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router