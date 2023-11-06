import { createRouter, createWebHashHistory } from "vue-router";

const router = new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/page"
        },
        {
            path: "/page",
            name: "Homepage",
            component: () => import('./pages/Home.vue')
        },
        {
            path: "/:catchAll(.*)",
            redirect: "/",
        }
    ]
})

export default router






