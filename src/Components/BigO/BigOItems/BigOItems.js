import React from 'react';
import './BigOItems.css';

function BigOItems({heading, desc, img}) {
  return (
    <div className='bigOItems_main'>
      <h3>{heading}</h3>
      <p>{desc}</p>
      <img src={img}/>
    </div>
  );
}

export default BigOItems;
