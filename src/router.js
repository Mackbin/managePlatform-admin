import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Login from '@/views/login/index'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/dashboard',
        sidebarShow: true,
        component: Layout,
        meta: { title: '首页', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/dashboard/index')
            }
        ]
    }, {
        path: '/organicManagement',
        sidebarShow: true,
        component: Layout,
        meta: { title: '机构管理', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/organic/organicManagement')
            }
        ]
    }, {
        path: '/userControl',
        sidebarShow: true,
        component: Layout,
        meta: { title: '用户管理', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/userControl/userControl')
            }
        ]
    }, {
        path: '/roleManagement',
        sidebarShow: true,
        component: Layout,
        meta: { title: '角色管理', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/roleManagement/roleManagement')
            }
        ]
    }, {
        path: '/chengeWord',
        sidebarShow: false,
        component: Layout,
        meta: { title: '修改密码', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/passWord/chengeWord')
            }
        ]
    }, {
        path: '/resetWord',
        sidebarShow: false,
        component: Layout,
        meta: { title: '设置密码', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/passWord/resetWord')
            }
        ]
    }, {
        path: '/displayedCard',
        sidebarShow: true,
        component: Layout,
        meta: { title: '总行卡种管理', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/displayedCard/displayedCard')
            }
        ]
    }, {
        path: '/branchCard',
        sidebarShow: true,
        component: Layout,
        meta: { title: '分行卡种分配', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/branchCard/branchCard')
            }
        ]
    }, {
        path: '/patchManagement',
        sidebarShow: true,
        component: Layout,
        meta: { title: '补件管理', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/patchManagement/patchManagement')
            }
        ]
    }, {
        path: '/branchAudit',
        sidebarShow: true,
        component: Layout,
        meta: { title: '分行初审', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/branchAudit/branchAudit'),
                meta: { title: '初审明细数据展示', icon: 'el-icon-setting', roles: 'operator' }
            }
        ]
    }, {
        path: '/statisticalStatement',
        sidebarShow: true,
        component: Layout,
        meta: { title: '统计报表', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/statisticalStatement/statisticalStatement')
            }
        ]
    }, {
        path: '/earningReport',
        sidebarShow: true,
        component: Layout,
        meta: { title: '业绩报表', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/earningReport/earningReport')
            }
        ]
    }, {
        path: '/sectionManagement',
        sidebarShow: false,
        component: Layout,
        meta: { title: '业绩报表', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/sectionManagement/sectionManagement')
            }
        ]
    }, {
        path: '/groupFile',
        sidebarShow: true,
        component: Layout,
        meta: { title: '团办预录入', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/groupFile/groupFile')
            }
        ]
    }, {
        path: '/powerManagement',
        sidebarShow: true,
        component: Layout,
        meta: { title: '权限管理', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/powerManagement/powerManagement')
            }
        ]
    }, {
        path: '/dictManagement',
        sidebarShow: true,
        component: Layout,
        meta: { title: '数据字典配置', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/dictManagement/dictManagement')
            }
        ]
    }, {
        path: '/dictDetails',
        sidebarShow: true,
        component: Layout,
        meta: { title: '数据字典详情', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/dictManagement/dictDetails/dictDetails')
            }
        ]
    }, {
        path: '/addCard',
        sidebarShow: false,
        component: Layout,
        meta: { title: '新增卡种', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/page/displayedCard/card_info/addCard')
            }
        ]
    }, {
        path: '/userinfo',
        sidebarShow: false,
        component: Layout,
        meta: { title: '个人信息', icon: 'el-icon-setting', roles: 'operator' },
        children: [
            {
                path: '',
                component: () => import('@/views/userinfo/userInfo')
            }
        ]
    }

]

export const asyncRouterMap = [
]

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: constantRouterMap
})
