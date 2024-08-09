import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/articles">Articles</Link>
      <Link className="nav-link" to="/topics">Topics</Link>
    </nav>
  );
};

export default Header;
