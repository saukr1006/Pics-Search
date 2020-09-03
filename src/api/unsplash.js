import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID 4zWxP1kLqw2TOL0NHwiCpRYK-_kqhFG_uIp7kYw2WzY'
    }
})