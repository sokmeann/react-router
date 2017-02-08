import React, { Component } from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums';

export default class Artist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }

  render() {
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    const artist = this.props.artist;
    const artistSongs = artist.songs;
    console.log('songs is array?', Array.isArray(artistSongs));
    console.log('artistSongs', artistSongs);
    return (
      <div>
        <h3>{artist.name}</h3>
        <Songs
            songs={artistSongs}
            currentSong={currentSong}
            isPlaying={isPlaying}
            toggleOne={toggleOne} />

      </div>

    )
  }

}
