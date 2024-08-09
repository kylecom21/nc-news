import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createComment, getCommentByArticleId } from "../../api";
import { Button } from "@mui/material";
import { getUsers } from "../../api";

const AddComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function createHandler(stateFunction) {
    return function innerHandler(event) {
      const value = event.target.value;
      stateFunction(value);
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    createComment(article_id, username, body)
      .then(() => {
        setBody("");
        setUsername("");
        return getCommentByArticleId(article_id);
      })
      .then((comments) => {
        setComments(comments);
      }).catch((error) => {
        alert("Error posting comment")
      })
  }

  return (
    <div>
      <form className="comment-form">
        <h1 className="comment-h1">Add a Comment</h1>

        <label htmlFor="username" className="comment-username">
          Username:
          <input
            list="usernames"
            onChange={createHandler(setUsername)}
            type="text"
            name="usernames"
            className="comment-input"
            placeholder="Select a Username"
            value={username}
          />
          <datalist id="usernames">
            {users.map((user) => (
              <option value={user.username} key={user.username} />
            ))}
          </datalist>
        </label>
        <label htmlFor="body" className="comment-comment">
          Comment:
          <input
            onChange={createHandler(setBody)}
            type="text"
            name="body"
            className="comment-input"
            placeholder="Enter New Comment"
            value={body}
          />
        </label>
        <Button
          className="comment-send"
          variant="contained"
          sx={{ backgroundColor: "#c9c3b7;", color: "#333" }}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default AddComment;
