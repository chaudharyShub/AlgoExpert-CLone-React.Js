import './Home.css';
import React from 'react';
import heroImage from '../../images/heroImage.png';
import credit_card from '../../images/credit_card.png';

function Home() {
  return (
    <div className='home_main'>
      <div className='hero'>
        <p id='heading'>AlgoExpert</p>
        <p>
          The ultimate resource to prepare for coding interviews. Everything you need, in one streamlined platform.
        </p>
        <button className='button'>
          <img src={credit_card}></img>
          Buy AlgoExpert
        </button>
      </div>
      <div className='heroImage'>
        <img src={heroImage} />
      </div>
    </div>
  );
}

export default Home;
