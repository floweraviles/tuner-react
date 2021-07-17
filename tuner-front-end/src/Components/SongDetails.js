import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function SongDetails() {
  const [song, setSong] = useState([]);
  let history = useHistory();
  const { id } = useParams();

  const deleteSong = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(async () => {
    try {
      const result = await axios.get(`${API}/songs/${id}`);
      setSong(result.data.payload);
    } catch (err) {
      console.log(err);
    }
  }, [id]);
  
  const handleDelete = async () => {
    await deleteSong();
    history.push('/songs');
  };

  return (
    <article>
      <a>{song.name}</a>
      <p>{song.artist}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}

export default withRouter(SongDetails);