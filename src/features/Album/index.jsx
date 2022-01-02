import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Album.propTypes = {
    
}
function Album(props) {
  const  listSong = [
        {
            id:1,
            nameSong: 'Nơi này có anh 1',
            ImgSong: 'this is linkImg 1',
        },
        {
            id:2,
            nameSong: 'Nơi này có anh 2',
            ImgSong: 'this is linkImg 2',
        },
        {
            id:3,
            nameSong: 'Nơi này có anh 3',
            ImgSong: 'this is linkImg 3',
        },
        {
            id:4,
            nameSong: 'Nơi này có anh 4',
            ImgSong: 'this is linkImg 4',
        },

    ]
    return (
        <div>
            <h1>Chào mừng đến dới ListSong</h1>
           <AlbumList propListSong = {listSong} />
        </div>
    );
}

export default Album;