import React from 'react';
import './AboutItems.css';

function AboutItems({ image, heading, desc }) {

  return (
    <div href='#' className='about_item_main'>
      <img className='child-about_item_main' id='about_item_image' src={image} />
      <p id='about_item_heading'>{heading}</p>
      <p id='pTag'>{desc}</p>
      <a href='#' className='anchorTag'>Learn more.</a>
    </div>
  );
}

export default AboutItems;
