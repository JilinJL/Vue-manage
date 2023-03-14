import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../views/Main.vue')
const User = () => import('../views/User.vue')
const Home = () => import('../views/Home.vue')
const Mall = () => import('../views/Mall.vue')
const PageOne = () => import('../views/PageOne.vue')
const PageTwo = () => import('../views/PageTwo.vue')
const Login = () => import('../views/Login.vue')
Vue.use(VueRouter)

const routes = [
    {
        // 主路由
        path: '/',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: 'home',
                name: 'home',
                component: Home,
            }, {
                path: 'user',
                name: 'user',
                component: User,
            },{
                path: 'mall',
                name: 'mall',
                component: Mall
            },{
                path: 'page1',
                name: 'page1',
                component: PageOne
            },{
                path: 'page2',
                name: 'page2',
                component: PageTwo
            }
        ]
    },
    {
        // 登陆
        path: '/login',
        name: 'login',
        component: Login
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
