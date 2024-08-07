import { useState, useEffect } from "react";
import { getCommentByArticleId } from "../../api";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import formatDate from "./FormatDate";

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
    <div className="comments">
      <h1 className="comment-title">Comments</h1>
      <input
        className="comment-input"
        type="New comment"
        placeholder="Enter New Comment"
      />
      <Button
        className="comment-send"
        variant="contained"
        sx={{ backgroundColor: "#333;", color: "#c9c3b7" }}
      >
        Send
      </Button>
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
                <p className="comment-date">{formatDate(comment.created_at)}</p>
              </div>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
