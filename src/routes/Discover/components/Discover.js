import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {connect} from "react-redux";
import {fetchApi} from "../../../api";

class Discover extends Component {

  unsubscribeReleasedSongs = null;
  unsubscribePlaylist = null
  unsubscribeCategory = null


  componentDidMount() {
    const {getNewReleasedSongs, getFeaturedPlaylists, getCategories } = this.props;

    const { unsubscribe: unsubscribeReleasedSongs } = getNewReleasedSongs(3);
    const { unsubscribe: unsubscribePlaylist } = getFeaturedPlaylists(3);
    const { unsubscribe: unsubscribeCategory } = getCategories(3);

    this.unsubscribeReleasedSongs = unsubscribeReleasedSongs;
    this.unsubscribePlaylist = unsubscribePlaylist;
    this.unsubscribeCategory = unsubscribeCategory;
  }

  componentWillUnmount() {
    this.unsubscribeReleasedSongs?.();
    this.unsubscribePlaylist?.();
  }
  
  render() {
    const { songs, features, categories } = this.props

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={songs?.data?.albums?.items || []} imagesKey="images" />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={features?.data?.playlists?.items || []} imagesKey="images" />
        <DiscoverBlock text="BROWSE" id="browse" data={categories?.data?.categories?.items || []} imagesKey="icons" />
      </div>
    );
  }
}
const mapState = (state) => ({ 
  songs: fetchApi.endpoints.getNewReleasedSongs.select(3)(state),
  features: fetchApi.endpoints.getFeaturedPlaylists.select(3)(state),
  categories: fetchApi.endpoints.getCategories.select(3)(state)
});
const mapDispatch = {
    getNewReleasedSongs: fetchApi.endpoints.getNewReleasedSongs.initiate,
    getFeaturedPlaylists: fetchApi.endpoints.getFeaturedPlaylists.initiate,
    getCategories: fetchApi.endpoints.getCategories.initiate
};
export default connect(mapState, mapDispatch)(Discover);
