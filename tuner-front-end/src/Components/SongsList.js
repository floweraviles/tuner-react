import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import SongListItem from "./SongListItem";
import "./SongsList.css"

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
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <h1>List of Songs</h1>
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
