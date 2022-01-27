import alertsService from '../modules/alerts/alerts.service';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/pokemon/:id', // id can be int or string
        name: 'PokemonDetail',
        component: () => import('../views/PokemonDetail.view.vue')
    },
    {
        path: '/',
        name: 'PokemonList',
        component: () => import("./../views/PokemonList.view.vue")
    },
    {
        path: '*',
        redirect: () => {
            alertsService.addAlert({ type: "warning", "text": "Page DNE" });
            return "/";
        }
    }
];

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})