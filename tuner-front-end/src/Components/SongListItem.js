import { Link } from "react-router-dom";

function SongListItem({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span className="notfav">X</span>
        )}
      </td>
      <td>
        <p>
          {song.name}
        </p>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default SongListItem;