import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function SongNewForm() {
  let history = useHistory();

  const addSong = async (newSong) => {
    console.log(newSong)
    console.log('ABOUT TO SEND THE REQUEST');
    try {
        // console.log(API)
      await axios.post(`${API}/songs`, newSong);
      console.log('SUCCESS, SENDING YOU TO INDEX PAGE')
      history.push(`/songs`);
    } catch (err) {
      console.log(err);
    }
  };

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("you work")
    addSong(song);
  };
  
  return (
    <div className="New">
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
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Artist of Song"
          required
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Album of Song"
          required
        />
         <label htmlFor="time">Time:</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="Length of Song"
          required
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        //   required
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(SongNewForm);