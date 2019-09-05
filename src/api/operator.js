import http from '@/utils/http'

export default {
    getCode(data) {
        return http({
            url: '/getCode',
            method: 'post',
            data: data
        })
    }
}
