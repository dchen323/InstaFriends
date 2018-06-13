import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = ({sessionId}) => (
      <div>
        <div className="filler-nav">
          <nav className="nav-bar">
            <span className="nav-main">
              <Link to="/"><i className="fab fa-instagram icon"></i>
              <content className="line">|</content></Link>
              <Link to="/"><h3 className="nav-title icon">InstaFriends</h3></Link>
            </span>
            <span className="search-span">
              <i className="fas fa-search icon3"></i>
              <input type="text" placeholder="Search"
                className="nav-search icon2"></input>
            </span>
            <span className="nav-icon">
              <i className="far fa-compass icon2"></i>
              <i className="far fa-heart icon2"></i>
              <Link to={`/user/${sessionId}`}><i className="far fa-user icon2 "></i></Link>
            </span>
          </nav>
        </div>
      </div>
);
