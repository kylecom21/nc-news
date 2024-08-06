import { getArticles } from "../../api";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    }),
      [];
  });
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="articles">
      <h1>Articles</h1>
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li className="article-item" key={article.article_id}>
              <p className="article-title">{article.title}</p>
              <p className="article-topic">{article.topic}</p>
              <p className="article-author">{article.author}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
