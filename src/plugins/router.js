import Vue from 'vue';
import Vuerouter from 'vue-router';

Vue.use(Vuerouter);

import home from '../pages/home'
import community from '../pages/community'
import buycar from '../pages/buycar'
import my from '../pages/my'
import reg from '../pages/reg'
import login from '../pages/login'
import detail from '../pages/detail'

let routes = [
    {path:'/home',component:home},
    {path:'/community',component:community},
    {path:'/buycar',component:buycar},
    {path:'/my',component:my},
    {path:'/reg',component:reg},
    {path:'/login',component:login},
    {path:'/detail/:aid',name:'detail',component:detail},
    {path:'/',redirect:'/home'},
]

let router=new Vuerouter({
    routes
});

export default router;



