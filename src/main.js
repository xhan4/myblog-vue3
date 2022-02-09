import {createApp} from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';
import routes from './route';
import Antd from 'ant-design-vue';
import './assets/style/resrt.css';
import 'ant-design-vue/dist/antd.css';
import {store} from './store';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
  })
const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);

app.mount('#app');
