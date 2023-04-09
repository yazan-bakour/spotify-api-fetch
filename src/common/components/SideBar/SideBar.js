import React, { Component } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import './_sidebar.scss';
import Profile from './components/Profile'
import {connect} from "react-redux";
import {fetchApi} from "../../../api";
import { ErrorAlert } from '@timechimp/tacugama';
import { NavLink } from "react-router-dom"

function renderSideBarOption(pageLink, icon, text) {
  return (
    <NavLink onClick={onclick} to={pageLink} className={({isActive}) => cx('sidebar__option', { 'sidebar__option--selected': isActive })}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </NavLink>
  )
}
class SideBar extends Component {

  unsubscribeSearch = null;

  componentDidMount() {
    const { getUser } = this.props;
    const { unsubscribe: unsubscribeSearch } = getUser(3);

    this.unsubscribeSearch = unsubscribeSearch;
  }

  componentWillUnmount() {
    this.unsubscribeSearch?.();
  }

  render() {
    const { user } = this.props

    return (
      <div className="sidebar">
        {
          user?.error && 
          <div className='snackbar'><ErrorAlert message={user?.error?.data?.error?.message} style={{ position: 0 }} /></div>
        }
        <Profile me={user} />
        <div className="sidebar__options">
          {renderSideBarOption('/', faHeadphonesAlt, 'Discover')}
          {renderSideBarOption('/search', faSearch, 'Search')}
          {renderSideBarOption('/favourites', faHeart, 'Favourites')}
          {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
          {renderSideBarOption('/charts', faStream, 'Charts')}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({ 
  user: fetchApi.endpoints.getUser.select(3)(state)
});
const mapDispatch = {
  getUser: fetchApi.endpoints.getUser.initiate
};
export default connect(mapState, mapDispatch)(SideBar);
