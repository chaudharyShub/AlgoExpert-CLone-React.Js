import React from 'react';
import './BigO.css';
import HeadingDesc from '../HeadingDesc';
import { bigODetails } from '../../Details';
import BigOItems from './BigOItems/BigOItems';

function BigO() {
  return (
    <div className='bigOMain'>
      <HeadingDesc
        heading='Big O Notation Made Easy.'
        desc=""
      />
      <div className='bigOContainer'>
        {
          bigODetails.map((element, index) => (
            <BigOItems
              heading={element.heading}
              desc={element.desc}
              img={element.img}
              key={index}
            />
          ))
        }
      </div>
      <button className='button dsaButton'>Become an AlgoExpert <span>&rarr;</span></button>
    </div>
  );
}

export default BigO;
