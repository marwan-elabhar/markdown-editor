import * as VueRouter from 'vue-router';


const routes = [
    {
        path: '/',
        component: () => import("../views/MarkdownEditor.vue")
    }
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
  })

export default router