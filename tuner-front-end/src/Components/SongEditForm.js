import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import "./SongEditForm.css"

function SongEditForm() {
  let { id } = useParams();
  let history = useHistory();
  const API = apiURL();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updatedSong = async (updateSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updateSong);
      history.push(`/songs/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
      const Edit = async() => {
          try {
              const res = await axios.get(`${API}/songs/${id}`)
             setSong(res.data)
              } catch (err) {
                  console.log(err)
              }

      }
      Edit();
    }, [id, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedSong(song, id);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Song"
          required
        />
        <br />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist of Song"
          required
        />
        <br />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          placeholder="Album of Song"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          value={song.time}
          type="text"
          placeholder="Length of Song"
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />

        <br />

        <button type="submit" >Submit</button>
      <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
      </Link>
      </form>
    </div>
  );
}

export default SongEditForm;