import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Biskit from '@/views/BiskitPage.vue';
import Doubliskit from '@/views/DoubliskitPage.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage },
    { path: '/biskit', component: Biskit },
    { path: '/doubliskit', component: Doubliskit },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
