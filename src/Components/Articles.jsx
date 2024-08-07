import { getArticles } from "../../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <div className="articles-list">
            <li className="articles-item" key={article.article_id}>
                <img className="articles-img"src={article.article_img_url} alt={article.title}/>
              <p className="articles-title">{article.title}</p>
              <p className="articles-topic">{article.topic}</p>
              <p className="articles-author">{article.author}</p>
            </li>
            </div>
            </Link>
          );
        })}
      </div>
  );
};

export default Articles;
