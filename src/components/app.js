import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then((tracks) => this.setState({ tracks }));
  }

  render() {
    const { tracks } = this.state;
    console.log('tracks', tracks.tracks);
    return (
      <div>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {tracks.tracks && <SongItem songData={tracks.tracks.items[0]} />}
      </div>
    );
  }
}
