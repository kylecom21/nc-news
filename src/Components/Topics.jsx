import { Link } from "react-router-dom";
import { getTopics } from "../../api";
import { useState, useEffect } from "react";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="topics">
      <h1>Topics</h1>
      {topics.map((topic) => {
        return (
          <Link
            key={topic.slug}
            to={`/articles?topic=${topic.slug}`}
          >
            <div className="topic-list">
              <li className="topic-items">
                <h2>{topic.slug}</h2>
                <p>{topic.description}</p>
              </li>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Topics;
