import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { LayoutPlugin, ModalPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Dashboard Layout
import './ext/shards-dashboards.1.1.0.css'

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPowerOff,
    faArrowDown,
    faCogs,
    faGamepad,
    faInfoCircle,
    faTachometerAlt,
    faBars,
    faTimes,
    faPlusCircle,
    faTrash,
    faPen,
    faStop,
    faForward,
    faFastForward,
    faBackward,
    faFastBackward,
    faDotCircle,
    faFile,
    faSave,
    faFileDownload,
    faPlay
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faPowerOff,faArrowDown,faCogs, faGamepad, faInfoCircle, faTachometerAlt, faBars, faTimes, faPlusCircle, faTrash, faPen, faStop, faForward, faFastForward, faBackward, faFastBackward, faDotCircle, faFile, faSave, faFileDownload, faPlay])
Vue.component('font-awesome-icon', FontAwesomeIcon)

// toastr
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
window.toastr = require('toastr')
Vue.use(VueToastr2)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')