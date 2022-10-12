import React from 'react';
import './About.css';
import AboutItems from './AboutItems/AboutItems';
import { aboutContent } from '../../Details';
import play_button from '../../images/play_button.png';

function About() {

  return (
    <div className='about_main'>
      <div className='what_is_algo'>
        <p>What is AlgoExpert?</p>
        <button id='watch_video'>
          <img src={play_button} />
          Watch the video
        </button>
      </div>
      <div className='aboutItemContainer'>
        {
          aboutContent.map((element, index) => (
            <AboutItems
              className='gridItem'
              image={element.image}
              heading={element.heading}
              desc={element.description}
              key={index}
            />
          ))
        }
      </div>
    </div>
  );
}

export default About;
