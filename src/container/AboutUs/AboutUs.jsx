import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">G-Seafood is committed to sending customers the freshest products, if you find that the product is not as advertised, you can return it for free 100%. Thank you to our customers who have supported us over the years.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">G-Seafood is put into operation and business at the end of 2020, confident to be the best and most delicious seafood restaurant in Binh Dinh province. We always look forward to serving our best so that you can have a happy experience with your loved</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
