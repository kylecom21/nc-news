import axios from "axios"

const api = axios.create({
    baseURL: "https://be-nc-news-dm0u.onrender.com"
})

const getArticles = () => {
    return api.get('/api/articles').then(({data}) => {
        return data.articles
    })
}

export default {getArticles}