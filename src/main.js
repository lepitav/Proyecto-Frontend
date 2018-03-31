import Vue from 'vue'
import App from './App.vue'

import './assets/styles/layout.css'
import './assets/styles/framework.css'
import './assets/styles/fontawesome-4.4.0.min.css'
import './assets/styles/css.css'

//import './assets/scripts/jquery.backtotop.js'
//import './assets/scripts/jquery.min.js'
//import './assets/scripts/jquery.mobilemenu.js'
//import './assets/scripts/jquery.placeholder.min.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
