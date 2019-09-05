<template>
    <div class="login-container">
        <el-form>
            <h3 class="title">昆仑银行移动发卡管理平台</h3>
            <el-form-item>
                <img class="svg username" src="@/icons/login/username.svg" alt="用户名">
                <el-input
                    v-model="loginfo.username"
                    name="username"
                    type="text"
                    auto-complete="on"
                    placeholder="username"
                />
            </el-form-item>
            <el-form-item>
                <img class="svg password" src="@/icons/login/password.svg" alt="密码">
                <el-input
                    :type="pwdType"
                    v-model="loginfo.password"
                    name="password"
                    auto-complete="on"
                    placeholder="password"
                    @keyup.enter.native="handleLogin"
                />
            </el-form-item>
            <el-form-item style="margin-bottom: 0;">
                <el-input
                    v-model="loginfo.validateCode"
                    name="validateCode"
                    placeholder="验证码"
                    style="width: 55%; margin-left: 34px;"
                />
                <img
                    class="validate"
                    :src="validateSrc"
                    alt="验证码"
                    @click="newValidate"
                />
            </el-form-item>
            <el-form-item>
                <el-checkbox
                    v-model="loginfo.rememberMe"
                    style="margin-left: 74%;"
                >记住我</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    style="width: 85%; margin-left: 34px;"
                    @click.native.prevent="handleLogin"
                    :loading="loading"
                >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginfo: {
                username: '',
                password: '',
                validateCode: '',
                rememberMe: false
            },
            pwdType: 'password',
            loading: false,
            validateSrc: ''
        }
    },
    created() {
        this.newValidate()
    },
    methods: {
        handleLogin() {
            console.log('登录事件');
            this.loading = true;
            this.$store.dispatch('Login', this.loginfo).then(res => {
                console.log('登录成功');
                this.loading = false;
                this.$router.push('/dashboard')
            }).catch(err => {
                console.log(`登录失败  ${err.message}`)
                this.loading = false;
            })
        },

        newValidate() {
            this.validateSrc = 'http://10.125.188.195/captcha/captchaImage?type=math'
            // this.validateSrc = 'http://18.141.69.132/captcha/captchaImage?type=math' + Math.random()
        }
    }
}
</script>

<style lang="less" scoped>
@bg:#2d3a4b;
@light_gray:#eee;
@dark_gray:#889aa4;
// rest element-ui css
.login-container {
    .el-form {
        width: 520px;
        margin: 0 auto;
        max-width: 100%;
        box-sizing: border-box;
    }
    .el-input {
        height: 47px;
        width: 85%;
    }
}
.login-container {
    width: 100%;
    height: 100%;
    background: #123456;
    color: #fff;
    position: relative;
    .title {
        margin-bottom: 40px;
        font-size: 32px;
        text-align: center;
    }
    .el-form {
        position: absolute;
        left: 0;
        right: 0;
        margin: 120px auto 0;
        padding: 35px 35px 15px 35px;
        .svg {
            color: @dark_gray;
            vertical-align: middle;
            width: 20px;
            display: inline-block;
            margin-right: 14px;
        }
        .validate {
            border-radius: 4px;
            width: 26%;
            height: 40px;
            margin-left: 12px;
            vertical-align: middle;
        }
    }
}
</style>
