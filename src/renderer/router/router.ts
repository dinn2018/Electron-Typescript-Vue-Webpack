import { Vue } from 'vue-property-decorator'
import VueRouter from 'vue-router'
import Me from '../views/me.vue'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            name: 'nova',
            redirect: { name: 'home' },
            path: '/',
        },
        {
            name: 'home',
            component: Home,
            path: '/home',
        },
        {
            name: 'me',
            component: Me,
            path: '/me',
        },
    ],
})

export default router
