import { useState, useEffect } from "react";
import { getCommentByArticleId } from "../../api";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import formatDate from "./FormatDate";
import AddComment from "./AddComment";

const Comments = () => {
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentByArticleId(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <AddComment setComments={setComments} />

      <div className="comments">
        <h1 className="comment-title">Comments</h1>
        {comments.map((comment) => {
          return (
            <div className="comment-list" key={comment.comment_id}>
              <li className="comment-item">
                <div className="comment-header">
                  <p className="comment-author">{comment.author}</p>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#c9c3b7;", color: "#333;" }}
                  >
                    {" "}
                    Delete
                  </Button>
                </div>
                <p className="comment-body">{comment.body}</p>
                <div className="comment-footer">
                  <Button
                    variant="contained"
                    className="comment-votes"
                    sx={{ backgroundColor: "#c9c3b7;", color: "#333;" }}
                  >
                    {comment.votes}
                  </Button>
                  <p className="comment-date">
                    {formatDate(comment.created_at)}
                  </p>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
