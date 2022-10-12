import React from 'react';
import './Languages.css';
import HeadingDesc from '../HeadingDesc';
import { languageDetails } from '../../Details';
import LanguageItems from './LanguageItems/LanguageItems';

function Languages() {
  return (
    <div className='language_main'>
      <div className='animation_language'>
        <div className='languageAnimation'>
          {/* ROTATING BOX */}
          <div id="wrapper">
            <div className="box-area">
              <div id="box-front" className="box"></div>
              <div id="box-right" className="box"></div>
              <div id="box-back" className="box"></div>
              <div id="box-left" className="box"></div>
              <div id="box-top" className="box"></div>
              <div id="box-bottom" className="box"></div>
            </div>
          </div>
          {/* ROTATING BOX ENDS */}
        </div>
        <div className='languageItemsParent'>
          <HeadingDesc
            heading='We Speak 9 Languages.'
            desc="There's nothing more frustrating than opening an interview prep book, only to find a bunch of solutions in a programming language that you don't know. That's why all of our questions come with complete written solutions in 9 popular languages."
          />
          {
            languageDetails.map((element, index) => (
              <LanguageItems
                key={index}
                img={element.img}
                languageName={element.heading}
                desc={element.desc}
              />
            ))
          }
        </div>
      </div>
      <div className='language_input'>
        <p>Hey there! Do you want to ace your upcoming coding interviews?</p>
        <div className='languageButtonContainer'>
          <div className='buttonDiv'>
            <button className='language_input_button'>Of Course!</button>
            <button className='language_input_button'>Nope.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
