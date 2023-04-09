import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import { Outlet } from 'react-router-dom';

function CoreLayout({ history }) {

  return (
    <div className="main">
      <SideBar  history={history} />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">
          <Outlet />
        </div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
