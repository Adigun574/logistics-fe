import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/general/Dashboard.vue'
import ShipNow from '../views/general/ShipNow.vue'
import Transactions from '../views/transactions/Transactions.vue'
import Payment from '../views/payment/Payment.vue'
import Order from '../views/order/Order.vue'
import QuickQuote from '../views/general/QuickQuote.vue'
import Help from '../views/general/Help.vue'
import Profile from '../views/general/Profile.vue'
import ResetPassword from '../views/general/ResetPassword.vue'

const routes = [
  {
    path:'/',
    name: 'Landing',
    component: Landing
  },
  {
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path:'/shipnow',
    name: 'Shipnow',
    component: ShipNow
  },
  {
    path:'/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path:'/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path:'/order-details',
    name: 'OrderDetails',
    component: Order
  },
  {
    path:'/quick-quote',
    name: 'QuickQuote',
    component: QuickQuote
  },
  {
    path:'/help',
    name: 'Help',
    component: Help
  },
  {
    path:'/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


