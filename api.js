import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-dm0u.onrender.com",
});

const getArticles = (topic) => {
  let url = "";
  if (topic) {
    url = `api/articles?topic=${topic}`;
  } else {
    url = `api/articles`;
  }
  return api.get(url).then(({ data }) => {
    return data.articles;
  });
};

const getArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getCommentByArticleId = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const updateArticleByArticleId = (article_id, inc_votes) => {
  return api
    .patch(`/api/articles/${article_id} `, inc_votes)
    .then(({ data }) => {
      return data.article;
    });
};

const createComment = (article_id, username, body) => {
  const data = {
    username: username,
    body: body,
  };

  return api
    .post(`/api/articles/${article_id}/comments`, data)
    .then(({ data }) => {
      return data;
    });
};

const getUsers = () => {
  return api.get("/api/users").then(({ data }) => {
    return data.users;
  });
};

const deleteComment = (comment_id) => {
  return api.delete(`/api/articles/${comment_id}`).then(({ data }) => {
    return data.comment;
  });
};

const getTopics = () => {
  return api.get("/api/topics").then(({ data }) => {
    return data.topics;
  });
};

export {
  getArticles,
  getArticle,
  getCommentByArticleId,
  updateArticleByArticleId,
  createComment,
  getUsers,
  deleteComment,
  getTopics,
};
