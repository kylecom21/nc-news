import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Articles from "./Components/Articles";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
