import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'horario-index',
    component:() => import('./views/horario/index.vue')
  },
  {
    path: '/add',
    name: 'horario-add',
    component:() => import('./views/horario/add.vue')
  },
  {
    path: '/edit/:id',
    name: 'horario-edit',
    component:() => import('./views/horario/edit.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router