
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'access_token:id', component: () => import('pages/Index.vue') },
      { path: '/player', component: () => import('pages/Player.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Index.vue')
  }
]

export default routes
