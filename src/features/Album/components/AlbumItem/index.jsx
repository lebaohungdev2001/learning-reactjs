import React, { useState } from "react";
import PropTypes from "prop-types";

AlbumItem.propTypes = {
  songItem: PropTypes.object,
};
AlbumItem.defaultProps = {
  songItem: {},
};
function AlbumItem({ songItem }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>hi đây là item</p>
      <p>{count}</p>
      <button onClick={() => setCount((x) => x + 1)}>Increase</button>
      <img src="" alt={songItem.nameSong} />
      <p>{songItem.ImgSong}</p>
    </div>
  );
}

export default AlbumItem;
