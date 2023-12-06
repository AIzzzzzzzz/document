import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hosipetal',
            component: () => import('@/pages/hosipetal/index.vue')
        }
    ],
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        }
    }
})

