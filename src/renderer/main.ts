import { Vue } from 'vue-property-decorator'
import VueRouter from 'vue-router'
import Nova from './Nova.vue'
import VueResource from 'vue-resource'
import router from './router/router'
import Vuex from 'vuex'
import Store from '../store'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

// the portal root
new Vue({ store: new Store(), router, render: (h) => h(Nova) }).$mount('#app')

