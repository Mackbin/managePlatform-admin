import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store/index'
import qs from 'qs'

// 创建axios实例
const http = axios.create({
    baseURL: 'https://easy-mock.com/mock/5c2709b7c47a223b9fc3e9f2/lybzj',
    // baseURL: 'http://10.125.188.195',
    // baseURL: 'http://18.141.69.132',
    timeout: 6000, // 请求超时时间
    withCredentials: true,
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
})

// 拦截器可以在.then()或者.catch()之前对请求/返回的数据进行处理
// requeset 拦截器
http.interceptors.request.use(
    // 请求发送之前做一些配置，做一些事, 让每个请求携带token
    config => {
        console.log('请求参数: ' + JSON.stringify(config.data))
        // 将json转化为查询字符串
        config.data = qs.stringify(config.data);
        return config
    },
    // 请求出错时的统一处理
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

// response拦截器
http.interceptors.response.use(
    response => {
        const res = response.data
        // 状态码非1均为异常状态
        if (res.code === 500) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 1000
            })
            // 判断出token异常的状态码，然后做出登出动作
            if (res.code === '5000' || res.code === '5001') {
                MessageBox.confirm(
                    '您已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    store.dispatch('LogOut').then(() => {
                        location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                })
            }
            // return Promise.reject(new Error('响应状态码不为1'))
            return Promise.reject(new Error(`[响应码]：${res.code}  [错误信息]：${res.msg}`))
        } else {
            return response.data
        }
    },
    error => {
        console.log('error:' + error)
        Message({
            message: error.message,
            type: 'error',
            durations: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default http
