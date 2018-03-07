import React from 'react';
import Wrap from './Wrap';

import '../scss/Navbar.scss';

export default () => (
  <nav className="navbar">
    <Wrap>
      <a className="navbar_brand" href="/">
        <img src="./img/logo.png" alt="logo"/>
      </a>
      <ul className="navbar_menu">
        <li className="navbar_menu-item navbar_menu-item_active">
          <a className="navbar_link" href="#">Shots</a>
        </li>
        <li className="navbar_menu-item">
          <a className="navbar_link" href="#">Designers</a>
        </li>
        <li className="navbar_menu-item">
          <a className="navbar_link" href="#">Blog</a>
        </li>
        <li className="navbar_menu-item">
          <a className="navbar_link" href="#">Podcast</a>
        </li>
        <li className="navbar_menu-item">
          <a className="navbar_link" href="#">Meetups</a>
        </li>
        <li className="navbar_menu-item">
          <a className="navbar_link" href="#">Jobs</a>
        </li>
        <li className="navbar_menu-item">
          <a className="navbar_link" href="#">Hiring</a>
        </li>
      </ul>
      <div className="hamburger">
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </Wrap>
  </nav>
)
