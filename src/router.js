import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import Products from './pages/Products.vue';
import ShowProduct from './pages/ShowProduct.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import TechTeam from './pages/TechTeam.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/products/:slug',    
            name: 'showproduct',
            component: ShowProduct
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactUs
        },
       {
        path: '/techteam',
        name: 'techteam',
        component: TechTeam
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
        

    ]
});

export {router};