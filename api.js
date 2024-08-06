import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-dm0u.onrender.com",
});

const getArticles = () => {
  return api.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

const getArticle = (article_id) => {
    return api.get(`/api/articles/${article_id}`).then(({data}) => {
        return data.article
    })
}

export { getArticles, getArticle };