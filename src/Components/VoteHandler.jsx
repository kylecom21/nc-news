import { updateArticleByArticleId } from "../../api";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

const VoteHandler = ({ article }) => {
  const [increasedVotes, setIncreasedVotes] = useState(0);
  const [decreasedVotes, setDecreasedVotes] = useState(0);
  const {article_id} = useParams()

  const increaseVotes = () => {
    setIncreasedVotes((currVotes) => {
      return currVotes + 1;
    });
    updateArticleByArticleId(article_id, {inc_votes:1}).catch(() => {
      setIncreasedVotes((currVotes) => {
        return currVotes - 1;
      });
    });
  };

  const decreaseVotes = () => {
    setDecreasedVotes((currVotes) => {
      return currVotes - 1;
    });
    updateArticleByArticleId(article_id, {inc_votes: - 1}).catch(() => {
      setDecreasedVotes((currVotes) => {
        return currVotes + 1;
      });
    });
  };

  return (
    <div>
      <h1 className="voting-title">Votes: {article.votes + increasedVotes + decreasedVotes}</h1>
      <div className="voting-buttons">
      <Button
        onClick={increaseVotes}
        variant="contained"
        sx={{ backgroundColor: "#333", color: "#d8c5a7" }}
        size="small"
      >
        UpVote
      </Button>
      <Button
          onClick={decreaseVotes}
          variant="contained"
          sx={{ backgroundColor: "#333", color: "#d8c5a7" }}
          size="small"
        >
          DownVote
        </Button>
        </div>
    </div>
  );
};



export default VoteHandler
