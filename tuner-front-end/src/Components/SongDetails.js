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
      <p>{song.name}</p>
      <p>{song.artist}</p>
      <p>{song.album}</p>
      <p>{song.time}</p>
      <p>{song.is_favorite ? (
          <span>⭐️ Its a Favorite</span>
        ) : (
          <span className="notfav">X</span>
        )}</p>
      <Link to={`/songs/${song.id}/edit`}>
      <button type="button">
          Edit
      </button>
      </Link>
      <button onClick={handleDelete}>Delete</button>

      </div>
  );
}

export default withRouter(SongDetails);
