import React from 'react';
import './AboveFooter.css';
import dustbin from '../../images/dustbin.png';

function AboveFooter() {

  const footerItems = [
    'Earn the AlgoExpert Certificate. Get referred to tech companies.',
    'No more InMail messages that get ignored.',
    'No more cold emails that go nowhere.',
    'No more job applications that get no attention.',
    "No more referral programs that don't work.",
    'No more recruiting agencies that cost a fortune.',
    'With AlgoExpert, preparing for interviews helps you land interviews.'
  ];

  const marqueeItems = [
    'Job Application',
    'InMain Message',
    'Referral Programme',
    'Cold Email',
    'Recruting Agency',
    'Referral Programme',

    'Referral Programme',
    'Cold Email',
    'InMain Message',
  ];

  function repeatItem(array) {
    for (let i = 0; i < 4; i++) {
      return <ul>{array.map((element, index) => <li key={index}>{element}</li>)}</ul>
    }
  }

  return (
    <div className='aboveFooterMain'>
      <div className='aboveFooterContainer'>
        <h3>A Better Way To Land Interviews.</h3>
        <ul className='aboveFooterList'>
          {
            footerItems.map((element, index) => <li key={index}>{element}</li>)
          }
        </ul>
        <button className='dsaButton button'>Learn More</button>
      </div>
      <div className='animationContainer'>
        <img src={dustbin} />
        <div className='animation'>
          {repeatItem(marqueeItems)}
          {repeatItem(marqueeItems)}
          {repeatItem(marqueeItems)}
          {repeatItem(marqueeItems)}
        </div>
      </div>
    </div>
  );
}

export default AboveFooter;
