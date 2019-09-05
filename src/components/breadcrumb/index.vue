<template>
    <el-breadcrumb separator="/">
        <transition-group name="breadcumb">
            <el-breadcrumb-item v-for="(item, index) in levellist" :key="item.path">
                <span v-if="index === levellist.length - 1">{{item.meta.title}}</span>
                <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            levellist: []
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched;
            const first = matched[0];
            if (first && first.name !== 'dashboard') {
                matched = [{ path: '/dashboard', meta: { title: '首页' } }].concat(matched)
            }
            // 清楚掉子路由设置为''时，多匹配出来的一个空路由
            this.levellist = matched.filter(item => {
                return item.meta.title
            })
        }
    }
}
</script>
