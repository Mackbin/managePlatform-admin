<template>
    <div class="layout">
        <sidebar class="sidebar-container" />
        <div class="main-container" ref="coles_sidebar" :class="{'collapse': isCollapse}">
            <navbar />
            <appmain />
        </div>
    </div>
</template>

<script>
import { Navbar, Sidebar, Appmain } from './components'
import { mapGetters } from 'vuex'
export default {
    name: 'Layout',
    components: { Navbar, Sidebar, Appmain },
    computed: {
        ...mapGetters([
            'addRouters',
            'sidebar'
        ]),
        isCollapse() {
            return this.sidebar.opened
        }
    },
    methods: {
        collapseChage() {
            console.log(this.refs.coles_sidebar);
            this.refs.coles_sidebar.width = 50 + 'px';
        }
    }
}
</script>

<style lang="less" scoped>
.layout {
    height: 100%;
    .sidebar-container {
        position: fixed;
        top: 0;
        left: 0;
    }
    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 256px;
        position: relative;
        &.collapse {
            margin-left: 64px;
        }
        .collapse-btn{
            float: left;
            padding: 0 21px;
            cursor: pointer;
            line-height: 70px;
        }
    }
}
</style>
