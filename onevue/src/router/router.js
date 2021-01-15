export const constRoutes = [
      {
            path: '/',
            name: 'Home',
            component: resolve => require(['@/components/common/Home'], resolve),
            redirect: '/accessmanage',
            meta: { title: '首页' },
            children: [
                  {
                        path: '/test',
                        name: 'test',
                        component: () => import('@/views/test.vue'),
                        meta: { title: 'one', icon: 'dashboard', requiresAuth: true }
                  },
                  {
                        path: '/homePage',
                        name: 'homePage',
                        component: () => import('@/views/homePage.vue'),
                        meta: { title: '系统首页', icon: 'dashboard', requiresAuth: true }
                  },
                  {
                        path: '/accessmanage',
                        name: 'accessmanage',
                        component: () => import('@/views/accessmanage.vue'),
                        meta: { title: '进出明细', requiresAuth: true }
                  },
                  {
                        path: '/temperatureDetails',
                        name: 'temperatureDetails',
                        component: () => import('@/views/temperaturemanage.vue'),
                        meta: { title: '体温明细', requiresAuth: true }
                  },
                  {
                        path: '/accountinfo',
                        name: 'accountinfo',
                        component: () => import('@/views/systemmanage.vue'),
                        meta: { title: '账号信息', requiresAuth: true }
                  },
            ]
      },
      {
            path: '/Documentation',
            name: 'documentations',
            component: resolve => require(['@/components/common/Home'], resolve),
            redirect: '/Documentation',
            meta: { title: '文档' },
            children: [
                  {
                        path: '/Documentation',
                        name: 'Documentation',
                        component: () => import('@/views/documentation/index.vue'),
                        meta: { title: '文档', requiresAuth: true }
                  },
            ]
      },
      {
            path: '/pay',
            name: 'pays',
            component: resolve => require(['@/components/common/Home'], resolve),
            redirect: '/pay',
            meta: { title: '支付' },
            children: [
                  {
                        path: '/pay',
                        name: 'pay',
                        component: () => import('@/views/pay/pay.vue'),
                        meta: { title: '支付', requiresAuth: true }
                  },
            ]
      },
      {
            path: '/digitalCode',
            name: 'digitalCodes',
            component: resolve => require(['@/components/common/Home'], resolve),
            redirect: '/digitalCode',
            meta: { title: '验证' },
            children: [
                  {
                        path: '/digitalCode',
                        name: 'digitalCode',
                        component: () => import('@/views/preview/digitalCode.vue'),
                        meta: { title: '数字验证', requiresAuth: true }
                  },
            ]
      },
      {
            path: '/Pagination',
            name: 'Paginations',
            component: resolve => require(['@/components/common/Home'], resolve),
            redirect: '/Pagination',
            meta: { title: '权限' },
            children: [
                  {
                        path: '/Pagination',
                        name: 'Pagination',
                        component: () => import('@/views/Pagination/index.vue'),
                        meta: { title: '权限', requiresAuth: true }
                  },
                  {
                        path: '/role',
                        name: 'role',
                        component: () => import('@/views/Pagination/role.vue'),
                        meta: { title: '角色权限', requiresAuth: true }
                  },
            ]
      },
      {
            path: '/assembly',
            name: 'assemblys',
            component: resolve => require(['@/components/common/Home'], resolve),
            redirect: '/TinymceDemo',
            meta: { title: '组件' },
            children: [
                  {
                        path: '/TinymceDemo',
                        name: 'TinymceDemo',
                        component: () => import('@/views/assembly/tinymce.vue'),
                        meta: { title: '编辑器', requiresAuth: true }
                  },
                  {
                        path: '/MarkdownDemo',
                        name: 'MarkdownDemo',
                        component: () => import('@/views/assembly/markdown.vue'),
                        meta: { title: 'Markdown', requiresAuth: true }
                  },
                  {
                        path: '/JsonEditorDemo',
                        name: 'JsonEditorDemo',
                        component: () => import('@/views/assembly/json-editor.vue'),
                        meta: { title: 'JsonEditor', requiresAuth: true }
                  },
                  {
                        path: '/AvatarUploadDemo',
                        name: 'AvatarUploadDemo',
                        component: () => import('@/views/assembly/avatar-upload.vue'),
                        meta: { title: '头像上传', requiresAuth: true }
                  },
                  {
                        path: '/DndListDemo',
                        name: 'DndListDemo',
                        component: () => import('@/views/assembly/dnd-list.vue'),
                        meta: { title: '列表拖拽', requiresAuth: true }
                  },
                  {
                        path: '/DragKanbanDemo',
                        name: 'DragKanbanDemo',
                        component: () => import('@/views/assembly/drag-kanban.vue'),
                        meta: { title: '拖拽看板', requiresAuth: true }
                  },
            ]
      },
      {
            path: '/icon',
            component: resolve => require(['@/components/common/Home'], resolve),
            name: 'Icon',
            redirect: '/index',
            meta: { title: '图标' },
            children: [
                  {
                        path: 'index',
                        component: () => import('@/views/icons/index'),
                        name: 'Icons',
                        meta: { title: 'Icons', icon: 'icon', noCache: true }
                  }
            ]
      },
      {
            path: '/charts',
            component: resolve => require(['@/components/common/Home'], resolve),
            name: 'charts',
            redirect: '/MixChart',
            meta: { title: 'charts图' },
            children: [
                  {
                        path: 'MixChart',
                        component: () => import('@/views/charts/mix-chart'),
                        name: 'MixChart',
                        meta: { title: '波浪图', icon: 'icon', noCache: true }
                  },
                  {
                        path: 'LineChart',
                        component: () => import('@/views/charts/line'),
                        name: 'LineChart',
                        meta: { title: '线图', icon: 'icon', noCache: true }
                  },
                  {
                        path: 'KeyboardChart',
                        component: () => import('@/views/charts/keyboard'),
                        name: 'KeyboardChart',
                        meta: { title: '线图', icon: 'icon', noCache: true }
                  }
            ]
      },
      {
            path: '/login',
            name: 'login',
            hidden: true,
            component: () => import('@/views/login.vue'),
            meta: { title: '登录' }
      },
      // {
      //   path: '/404',
      //   component: () => import('@/views/errorPage/404.vue'),
      //     // hidden: true
      // },
]