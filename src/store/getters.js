const getters = {
    token: state => state.user.token,
    name: state => state.user.name,
    roles: state => state.user.roles,
    permisson_routers: state => state.permission.routers,
    sidebar: state => state.app.sidebar,
    editableTabsArr: state => state.editableTabs.editableTabsArr,
    editableTabsValue: state => state.editableTabs.editableTabsValue
}

export default getters
