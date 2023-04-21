import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Welcome to the world of seafood!" />
      <h1 className="app__header-h1">What's so special about King Crab?</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>King crabs live at a depth of 200-400m in Alaskan waters, the salinity and cold are below 5 degrees. Caught in the deep and cold waters of the North Pacific Ocean, the waters of Alaska. With such a cold and deep sea, it is the ideal habitat for this crab.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.header_logo} alt="header_img" />
    </div>
  </div>
);

export default Header;
