import request from '@/utils/http.js'

export function getCategoriesAPI(id) {
return request({
    url: `/category`,
    params: {
        id
    }
})
}