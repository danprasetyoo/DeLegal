import AdminLayout from '@/layout/AdminLayout.vue'

// Import halaman Admin
import Dashboard from '@/pages/admin/Dashboard.vue'
import ManageDocument from '@/pages/admin/ManageDocument.vue'
import ManageUser from '@/pages/admin/ManageUser.vue'

const AdminRoutes = [
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: Dashboard,
      },
      {
        path: 'documents',
        name: 'ManageDocuments',
        component: ManageDocument,
      },
      {
        path: 'users',
        name: 'ManageUsers',
        component: ManageUser,
      },
    ],
  },
]

export default AdminRoutes
