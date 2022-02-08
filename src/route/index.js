import Route from '../pages/Route';
import Home from '../pages/Home';
import Type from '../pages/Type';
import Login from '../pages/Login';
import Label from '../pages/Label';
import ArticleInfo from '../pages/ArticleInfo'

const routes = [
    { path: '/',
      component: Route ,
      redirect:{name:'home'},
      children:[
         {path: 'home',name:'home', component: Home},
         {path: 'type',name:'type', component: Type },
         {path:'label',name:'label',component:Label},
         {path:'articleInfo/:taskId',name:'articleInfo',component:ArticleInfo}
        ]
    },
    { path: '/login',name:'login', component: Login},
  ]

  export default routes;