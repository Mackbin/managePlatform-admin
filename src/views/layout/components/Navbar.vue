<template>
    <div class="navbar">
        <div @click="toggel" class="back-icon-container" :class="{'is-active': sidebar.opened}">
            <i class="iconfont icon-shouqicaidan"></i>
        </div>
        <div class="menu">
            <span>帮助</span>
            <span>设置</span>
            <el-dropdown trigger="click" @command="handleCommand">
                <span>
                    <i>管理员</i>
                    <i>用户名</i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="userinfo">个人信息</el-dropdown-item>
                    <el-dropdown-item command="resetpwd">设置密码</el-dropdown-item>
                    <el-dropdown-item command="fixpwd">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'sidebar'
        ])
    },
    methods: {
        toggel() {
            this.$store.dispatch('ToggleSideBar')
        },
        handleCommand(command) {
            switch (command) {
            case 'userinfo':
                this.$router.push('/userinfo')
                break;
            case 'resetpwd':
                this.$router.push('/resetWord')
                break;
            case 'fixpwd':
                this.$router.push('/chengeWord')
                break;
            case 'logout':
                this.$store.dispatch('LogOut').then(() => {
                    this.$router.push('/')
                }).catch(err => {
                    this.$message({
                        type: 'error',
                        message: `登出错误${err}`
                    })
                })
            }
        }
    }
}
</script>

<style lang="less">
.navbar {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,21,41,0.12);
    .back-icon-container {
        transition: all .28s;
    }
    .is-active {
        transform: rotate(180deg);
    }
    .iconfont {
        width: 26px;
        height: 26px;
        font-size: 22px;
        line-height: 26px;
    }
    .menu {
        display: flex;
        span,i {
            font-size: 14px;
            color: #1890FF;
            padding: 0 20px;
            border-right: 1px solid #1890FF;
            cursor: pointer;
        }
        i {
            border-right: 0;
            padding: 0 8px;
            font-style: normal;
        }
    }
}
</style>
