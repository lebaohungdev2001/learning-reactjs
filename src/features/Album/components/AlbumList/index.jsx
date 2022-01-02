import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";
AlbumList.propTypes = {
  propListSong: PropTypes.array,
};
AlbumList.defaultProps = {
  propListSong: [],
};
function AlbumList({ propListSong }) {
  return (
    <div>
      <h2>List Album</h2>
      <div>
        <ul>
          {" "}
          {propListSong.map((item) => (
            <AlbumItem key={item.id} songItem={item} />
          ))}{" "}
        </ul>
      </div>
    </div>
  );
}

export default AlbumList;
