import { getArticles } from "../../api";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then(articles);
    setArticles(articles);
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="articles">
      <h1>Articles</h1>
    </div>
  );
};

export default Articles;
