import axios from "axios";
import { useEffect, useState } from "react";
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import './SongDetails.css'



const API = apiURL();
function SongDetails() {
  const [song, setSong] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const display = async () => {
      try {
        const res = await axios.get(`${API}/songs/${id}`);
        console.log(res);
        setSong(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    display();
  }, [id]);

  const handleDelete = async () => {
    await deleteSong();
    history.push("/songs");
  };
 

  return (
      <div className="list-container">
        <h1>Song</h1>
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
      <h3>{song.album}</h3>
      <h4>{song.time}</h4>
      <h4>{song.is_favorite ? (
          <span>⭐️ Its a Favorite</span>
        ) : (
          <span className="notfav">X</span>
        )}</h4>
      <Link to={`/songs/${song.id}/edit`}>
      <button className="edit" type="button">
          Edit
      </button>
      </Link>
      <button  className="delete" onClick={handleDelete}>Delete</button>
      <Link to={`/songs`}>
        <button  className="back" type="button">
          Go Back
        </button>
      </Link>

      </div>
  );
}

export default withRouter(SongDetails);
