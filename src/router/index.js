import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
      path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
      path: '/checkout',
        name: 'CheckOut',
        component: () => import('../views/CheckOut.vue'),
    },
    {
      path: '/view',
        name: 'viewprod',
        component: () => import('../views/ProdView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router