import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import SideNav from './components/SideNav.vue'
import Carousel from './components/Carousel.vue'
import RegistrationForm from './components/RegistrationForm.vue'
import Specialists from './components/Specialists.vue'
import Treatments from './components/Treatments.vue'
import Profile from './components/Profile.vue'
import Search from './components/Search.vue'
import MyProfile from './components/MyProfile.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Header',
            component: Header,
            path: '/Header'
        },

        {
            name: 'Home',
            component: Home,
            path: '/home'
        },
        {
            name: 'About',
            component: About,
            path: '/about'
        },
        {
            name: 'Profile',
            component: Profile,
            path: '/profile'
        },
        {
            name: 'SignUp',
            component: SignUp,
            path: '/signup'
        },
        {
            name: 'Login',
            component: Login,
            path: '/signin'
        },
        {
            name: 'SideNav',
            component: SideNav,
            path: '/'
        },
        {
            name: 'Carousel',
            component: Carousel,
            path:'/'
        },
        {
            name: 'RegistrationForm',
            component: RegistrationForm,
            path: '/registrationForm'
        },
        {
            name: 'Specialists',
            component: Specialists,
            path: '/specialists'
        },
        {
            name: 'Treatments',
            component: Treatments,
            path: '/treatments'
        },
        {
            name: 'Search',
            component: Search,
            path: '/Search'
        },
        {
            name: 'MyProfile',
            component: MyProfile,
            path: '/MyProfile'
        }

    ]
});
export default router;