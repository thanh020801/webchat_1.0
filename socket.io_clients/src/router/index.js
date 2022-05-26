import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage,
      children: [
            {
              path: '/chats',
              name: 'chats',
              component: () => import('../views/ListChatsPage.vue')
            },
            {
              path: '/friend',
              name: 'friend',
              component: () => import('../views/ListFriendPage.vue')
            },
            {
              path: '/add-friend',
              name: 'add-friend',
              component: () => import('../views/AddFriendsPage.vue')
            },
            {
              path: '/group',
              name: 'group',
              component: () => import('../views/GroupPage.vue')
            },
            {
              path: '/profile',
              name: 'profile',
              component: () => import('../views/ProfilePage.vue')
            },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    },  
  ]
})

export default router
