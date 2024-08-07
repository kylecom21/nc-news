import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </div>
  );
}

export default App;
