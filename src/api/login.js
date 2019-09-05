import http from '@/utils/http'

export function login(username, password, validateCode, rememberMe) {
    return http({
        url: '/login',
        method: 'post',
        data: {
            username,
            password,
            validateCode,
            rememberMe
        }
    })
}

export function logout() {
    return http({
        url: '/user/logout',
        method: 'post'
    })
}

export function first() {
    return http({
        url: '/showMenus',
        method: 'post'
    })
}
