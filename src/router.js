import { createRouter, createWebHistory } from "vue-router";
import ShowBooks from './pages/ShowBooks.vue';
import IndexBooks from './pages/IndexBooks.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexBooks
        },
        {
            path: '/show/:id',
            name: 'show',
            component: ShowBooks
        },
    ]
});

export { router };