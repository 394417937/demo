import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('@/views/web/index.vue'), meta: { title: '首页' } },
    {
        path: '/web',
        component: () => import('@/views/web/index.vue')
    },
    {
        path: '/progress',
        name: 'progress',
        component: () => import('@/views/web/progress/index'),
        meta: { title: '进度条', keepAlive: false }
    },
    {
        path: '/ecg',
        name: 'ecg',
        component: () => import('@/views/web/ecg/index'),
        meta: { title: '心电图', keepAlive: false }
    },
    {
        path: '/shark',
        name: 'shark',
        component: () => import('@/views/web/shark/index'),
        meta: { title: '扫光效果', keepAlive: false }
    },
    {
        path: '/officePreview',
        name: 'officePreview',
        component: () => import('@/views/web/officePreview/index'),
        meta: { title: 'ocffice预览', keepAlive: false }
    }
]

const router = new VueRouter({
    routes
})

export default router
