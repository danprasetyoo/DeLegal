import DefaultLayout from '@/layout/DefaultLayout.vue'

import Home from '@/pages/user/Home.vue'
import DocumentList from '@/pages/user/DocumentList.vue'
import Profile from '@/pages/user/Profile.vue'
import History from '@/pages/user/History.vue'

const UserRoutes = [
  {
    path: '/user',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'UserHome', component: Home },
      { path: 'documents', name: 'UserDocuments', component: DocumentList },
      { path: 'profile', name: 'UserProfile', component: Profile },
      { path: 'history', name: 'UserHistory', component: History },
    ],
  },
]

export default UserRoutes
