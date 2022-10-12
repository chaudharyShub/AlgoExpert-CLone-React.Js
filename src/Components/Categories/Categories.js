import React from 'react';
import './Categories.css';
import { categoriesDetails } from '../../Details';
import HeadingDesc from '../HeadingDesc';

function Categories() {
  return (
    <div className='categories_main'>
      <div className='categories_details'>
        <HeadingDesc
          heading="160 Questions Spanning 15 Categories."
          desc="If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 160 questions spanning 15 categories and 4 difficulty levels, we've got you covered."
        />
        <button className='button exploreButton'>Explore Questions</button>
      </div>
      <div className='categoryContainer'>
        {
          categoriesDetails.map((element, index) => (
            <div key={index} className="maincontainer">
              <div className="thecard">
                <div className="thefront">
                  <p>{element.front}</p>
                  <img src={element.img} />
                </div>
                <div className="theback">{element.back}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Categories;
