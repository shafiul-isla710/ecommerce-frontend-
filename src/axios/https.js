import axios from 'axios'

const url = 'https://ecommerce.test/v1'

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use((config) => {

})

