import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
      <nav className = "NavBar">
        <h1 className = "home">
          <Link to="/songs">Songs</Link>
        </h1>
        <button>
          <Link to="/songs/new">New Song</Link>
        </button>
      </nav>
    );
  }