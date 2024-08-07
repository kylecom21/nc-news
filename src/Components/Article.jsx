import { useState, useEffect } from "react";
import { getArticle } from "../../api";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import formatDate from "./FormatDate";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import VoteHandler from "./VoteHandler";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div key={article.article_id}>
      <div className="article-header">
        <p className="article-author">{article.author}</p>
        <div className="article-header-buttons">
          <Link to={`/articles/${article.article_id - 1}`}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#333", color: "#d8c5a7" }}
              size="small"
            >
              {"<="}
            </Button>
          </Link>
          <Link to={`/articles/${article.article_id + 1}`}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#333", color: "#d8c5a7" }}
              size="small"
            >
              {"=>"}
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="article-title">{article.title}</h1>
      <img className="article-img" src={article.article_img_url} alt="" />
      <p className="article-date">{formatDate(article.created_at)}</p>
      <p className="article-body">{article.body}</p>
      <VoteHandler article={article}/>
      <Comments />
    </div>
  );
};

export default Article;
