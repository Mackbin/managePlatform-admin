<template>
    <div class="query_info">
        <div class="change_password">
            <el-form  ref="registerData" :model="registerData" status-icon :rules="rules" :label-position='labelPosition' label-width="110px" class="demo-ruleForm">
                <el-form-item label="旧密码：" prop="username">
                    <el-input type="password" v-model="registerData.username" autocomplete="off" placeholder="请输入旧密码"></el-input>
                </el-form-item>
                <el-form-item label="设置密码：" prop="pass">
                    <el-input type="password" v-model="registerData.pass" placeholder="请输入新密码，6 - 20位" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="再次确认密码：" prop="checkPass">
                    <el-input type="password" v-model="registerData.checkPass" placeholder="请再次输入新密码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码：" prop="code">
                    <el-input class="validateNO" placeholder="输入验证码" v-model="registerData.code">
                    </el-input>
                    <el-button  class="validateNB" @click="submitForm('registerData')">获取验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="change_Sub" @click="submitForm(registerData)">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.registerData.checkPass !== '') {
                    this.$refs.registerData.validateField('checkPass')
                }
                callback()
            }
        }
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.registerData.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            labelPosition: 'right',
            checked: false,
            errMsg: '',
            select: '+86',
            registerData: {
                username: '',
                iphone: '',
                code: '',
                pass: '',
                checkPass: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                iphone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 6, max: 6, message: '请输入6位验证码', trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm(data) {
            this.$refs['registerData'].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        openProtocol() {
            let htmlS = '<strong>这是 <i>HTML</i> 片段</strong>'
            this.$alert(htmlS, '服务协议', {
                dangerouslyUseHTMLString: true,
                lockScroll: true,
                callback: () => {
                    this.checked = true
                }
            })
        },
        goBack() {
            this.$router.push('/')
        }
    }

}
</script>

<style lang="less" scoped>
    .change_password{
        width: 450px;
        margin: 0 auto;
        padding: 50px;
        .select86ID {
            width: 80px;
        }
        .validateNO {
            width: 68%;
            float: left;
        }
        .validateNB {
                width: 106px;
        }
        .register_err {
            margin-bottom: 15px;
            color:red;
            font-weight: 500;
        }
        .loginGo {
            text-align: right;
            font-size: 0.7rem;
            color: #1890ff;
            cursor: pointer;
        }
        .registerSub {
            width: 176px;
            float: left;
        }
        .change_Sub {
            padding: 8px 20px;
        }
    }
</style>
