import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
    return (
      <nav className = "NavBar">
        <h1 className = "home">
          <Link to="/songs">Tuner App</Link>
        </h1>
        <br></br>
        <button className = "button">
          <Link to="/songs/new">New Song</Link>
        </button>
      </nav>
    );
  }