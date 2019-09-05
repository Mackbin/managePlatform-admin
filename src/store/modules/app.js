const app = {
    state: {
        sidebar: {
            opened: !!+sessionStorage.getItem('sidebarStatus')
        },
        menus: sessionStorage.getItem('menus')
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                sessionStorage.setItem('sidebarStatus', 0)
            } else {
                sessionStorage.setItem('sidebarStatus', 1)
            }
            state.sidebar.opened = !state.sidebar.opened
        },
        SET_MENUS: (state, menus) => {
            state.menus = menus
            sessionStorage.setItem('menus', menus)
        }
    },
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
        GenerateMenus({ commit }, menus) {
            return new Promise(resolve => {
                commit('SET_MENUS', menus)
                resolve()
            })
        }
    }
}

export default app
