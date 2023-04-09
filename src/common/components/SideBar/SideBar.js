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

function renderSideBarOption(pageLink, icon, text, { selected } = {}) {
  // console.log(selected)
  return (
    <NavLink onClick={onclick} to={pageLink} className={({isActive}) => cx('sidebar__option', { 'sidebar__option--selected': isActive })}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </NavLink>
  )
}
class SideBar extends Component {
  constructor() {
    super()

    this.state ={
      selected: '/'
    }

  }
  unsubscribeSearch = null;

  componentDidMount() {
    const { getUser } = this.props;
    const { unsubscribe: unsubscribeSearch } = getUser(3);
    const pathName = window.location.pathname

    this.setState({ selected: pathName })

    this.unsubscribeSearch = unsubscribeSearch;
  }

  componentWillUnmount() {
    this.unsubscribeSearch?.();
  }

  // handleSelected(link) {
  //   const pathName = window.location.pathname
  //   if (pathName === link) {
  //     this.setState({ selected: true })
  //   }
  // }

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
          {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: this.state.selected })}
          {renderSideBarOption('/search', faSearch, 'Search', { selected: this.state.selected })}
          {renderSideBarOption('/favourites', faHeart, 'Favourites', { selected: this.state.selected })}
          {renderSideBarOption('/playlists', faPlayCircle, 'Playlists', { selected: this.state.selected })}
          {renderSideBarOption('/charts', faStream, 'Charts', { selected: this.state.selected })}
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
