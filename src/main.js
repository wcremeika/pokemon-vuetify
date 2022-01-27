import Vue from 'vue'
require('./modules/observables.js')
import App from './App.vue'
import router from './router/router.index'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')