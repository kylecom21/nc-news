import { useState, useEffect } from "react"
import { getArticle } from "../../api"
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import formatDate from "./FormatDate";
import { Link } from "react-router-dom";

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams();

    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
    },[])
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div key={article.article_id}>
        <p className="article-author">{article.author}</p>
        <h1 className="article-title">{article.title}</h1>
        <img className="article-img" src={article.article_img_url} alt="" />
        <p className="article-date">{formatDate(article.created_at)}</p>
        <p className="article-body">{article.body}</p>
        <div className="button-container">
      <Link to={`/articles/${article.article_id}/comments`}>
      <Button variant="contained" className="article-comments" sx={{backgroundColor: '#333', color:'#d8c5a7;'}}>Comments</Button>
      </Link>
    </div>
    </div>
  )
}

export default Article