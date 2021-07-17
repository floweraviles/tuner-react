import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import SongListItem from "./SongListItem";

const API = apiURL();
function SongsList() {
  const [songs, setSongs] = useState([]);
  
  useEffect(async () => {
    try {
      const res = await axios.get(`${API}/songs`);
      // res.data = { success: true, payload: bookmarks }
      setSongs(res.data.payload);
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  return (
    <div className="Songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this song</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <SongListItem key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default SongsList;