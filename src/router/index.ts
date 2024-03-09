import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Biskit from '@/views/BiskitPage.vue';
import Doubliskit from '@/views/DoubliskitPage.vue';
import Rules from '@/views/RulesPage.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage, meta: { title: 'Accueil' } },
    { path: '/biskit', component: Biskit, meta: { title: 'Biskit' } },
    { path: '/doubliskit', component: Doubliskit, meta: { title: 'Doubliskit' } },
    { path: '/rules', component: Rules, meta: { title: 'Règles' } },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach((to: RouteLocationNormalized) => {
    const defaultTitle = 'Doubliskit - Mon Jeu de Dés';
    document.title = (to.meta.title as string) || defaultTitle;
});

export default router;
