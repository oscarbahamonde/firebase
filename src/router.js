import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import Store from './views/Store.vue'
import Login from './views/Login.vue'

const routes = [
    {path:'/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/profile', name: 'Profile', component: Profile},
    {path: '/store', name: 'Store', component: Store},
    {path:'/login', name: 'Login', component: Login}
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
})

