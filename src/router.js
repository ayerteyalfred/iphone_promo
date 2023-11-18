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
            path: "/terms-and-conditions",
            name: "TermsAndConditions",
            component: () => import('./pages/TermsAndConditions.vue')
        },
        {
            path: "/privacy-policy",
            name: "PrivacyPolicy",
            component: () => import('./pages/PrivacyPolicy.vue')
        },
        {
            path: "/about-us",
            name: "AboutUs",
            component: () => import('./pages/AboutUs.vue')
        },
        {
            path: "/:catchAll(.*)",
            redirect: "/",
        }
    ]
})

export default router






