import React from 'react';

import { images } from '../../constants'
const SubHeading = ({title}) => (
  <div stype = {{marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={images.crab_logo} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
