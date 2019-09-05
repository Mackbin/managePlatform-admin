import { login, logout } from '@/api/login'

const user = {
    state: {
        userinfo: sessionStorage.getItem('user')
    },

    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        }
    },

    actions: {
        // 登录
        Login({ commit }, userInfo) {
            const loginName = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(loginName, userInfo.password, userInfo.validateCode, userInfo.rememberMe).then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', '')
                    removeToken()
                    removeRoles()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user
