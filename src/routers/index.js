import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes= [
    {
        path: '/',
        name: 'PlayGroud',
        component: () => import('@/page/playground')
    },
    {
        path: '/tables',
        name: 'TableS',
        component: () => import('@/page/Tables')
    },
]

const router = new VueRouter({
    routes
})

export default router

