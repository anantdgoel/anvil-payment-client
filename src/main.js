// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Payment from './components/Payment.vue'
import Confirmation from './components/Confirmation.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/signup', component: Signup},
  {path: '/login', component: Login},
  {path: '/payment', component: Payment},
  {path: '/confirmation', component: Confirmation}
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
// Start the app on the #app div
// router.start(App, '#app')
//
