import Route from '../pages/Route';
import Home from '../pages/Home';
import Type from '../pages/Type';
import Login from '../pages/Login';
import Label from '../pages/Label';

const routes = [
    { path: '/',
      component: Route ,
      redirect:'/home',
      children:[
         {path: 'home', component: Home },
         {path: 'type', component: Type },
         {path:'label',component:Label}
        ]
    },
    { path: '/login', component: Login},
  ]

  export default routes;