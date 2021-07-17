import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import SongListItem from "./SongListItem";

const API = apiURL();
console.log(API);
function SongsList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const List = async () => {
      try {
        const res = await axios.get(`${API}/songs`);
        //   res.data = { success: true, payload: songs }
        setSongs(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    List();
  }, [setSongs]);

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
