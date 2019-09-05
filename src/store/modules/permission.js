/* eslint-disable */
import { asyncRouterMap, constantRouterMap } from '@/router'

// 某个路由是否能被用户权限匹配
function hasPermisson (route, roles) {
    if (route.meta && route.meta.roles) {
        if (route.meta.roles === roles) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

// 根据用户权限过滤已配置的异步路由
function filterAsyncRouter (routers, roles) {
    const res = []
    routers.forEach(route => {
        if (hasPermisson(route, roles)) {
            res.push(route)
        }
    })

    return res
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTES: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes ({ commit }, roles) {
            return new Promise(resolve => {
                let accessRoutes
                if (roles === 'superAdmin') {
                    accessRoutes = asyncRouterMap
                } else {
                    accessRoutes = filterAsyncRouter(asyncRouterMap, roles)
                }
                commit('SET_ROUTES', accessRoutes)
                resolve()
            })
        }
    }
}

export default permission
