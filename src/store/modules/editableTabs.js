const editableTabs = {
    state: {
        editableTabsArr: JSON.parse(sessionStorage.getItem('editableTabsArr')) || [],
        editableTabsValue: { name: '', path: '' }
    }
}
export default editableTabs
