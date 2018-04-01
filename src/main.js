import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Movies from './components/Movies.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/movies', component: Movies}
  ]
});

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
  router,
  template: `
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/movies">Movies</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
  `,
  render: h => h(App)
}).$mount('#app')
