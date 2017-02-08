import React, { Component } from 'react';
import { Link } from 'react-router';
import Songs from '../components/Songs';
import Albums from '../components/Albums';

export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(this.artistId);
  }

  render() {
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    const artist = this.props.artist;
    const artistAlbums = artist.albums;
    const artistSongs = artist.songs;

    const children = this.props.children;

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${this.artistId }/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${this.artistId }/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, {
            currentSong,
            isPlaying,
            toggleOne,
            albums: artistAlbums,
            songs: artistSongs
        }) }
      </div>
    )
  }

}
