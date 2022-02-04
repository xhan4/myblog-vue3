import * as Vue from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';
import routes from './route';
import './assets/style/resrt.css'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
const app = Vue.createApp(App);

app.use(router);

app.mount('#app');
