
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FlexBox.vue') },
      { path: 'index', component: () => import('pages/IndexPage.vue') },
      { path: 'setup_counter', component: () => import('pages/SetupCounter.vue') },
      { path: 'style', component: () => import('pages/StyleIdent.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
