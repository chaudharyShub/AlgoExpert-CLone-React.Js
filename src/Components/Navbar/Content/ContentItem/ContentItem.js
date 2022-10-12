import React, { useState } from 'react';
import './ContentItem.css';

function ContentItem({ img, heading }) {

  return (
    <div className='componentItemMain' style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
      <img src={img} />
      <h3>{heading}</h3>
    </div>
  );
}

export default ContentItem;
