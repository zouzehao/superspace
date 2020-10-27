import Vue from "vue"
import VueRouter from 'vue-router'
import Home from "@/views/home/Home";
import MySite from "@/views/mysite/MySite";
import Pagetwo from "@/views/pegetwo/Pagetwo";
import Pagethree from "@/views/pagethree/Pagethree";
import Classify from "@/views/classify/Classify";

// 安装插件
Vue.use(VueRouter)

// 创建路由对象
const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/mysite',
        component:MySite
    },
    {
        path: '/pagetwo',
        component:Pagetwo
    },
    {
        path: '/pagethree',
        component:Pagethree
    },
    {
        path: '/classify',
        component:Classify
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

// 导出router
export default router

//去main.js中挂载