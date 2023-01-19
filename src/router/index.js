import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Allsection from '../views/Allsection.vue'
import ServicesView from '../views/ServicesView.vue'
import OurteamView from '../views/OurteamView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import OurPartnersView from '../views/OurPartnersView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Allsection',
    component: Allsection
  },
  {
    path: '/services',
    name: 'services',
    component:ServicesView
  },
  {
    path: '/ourTeam',
    name: 'ourteam',
    component:OurteamView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component:PortfolioView
  },
  {
    path: '/ourpartners',
    name: 'ourpartners',
    component:OurPartnersView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
