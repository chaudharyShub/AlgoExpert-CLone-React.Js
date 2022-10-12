import React from 'react';
import './Companies.css';
import twoSigmaLogo from '../../images/twoSigmaLogo.png';
import amazonLogo from '../../images/amazonLogo.png';
import facebookLogo from '../../images/facebookLogo.png';
import googleLogo from '../../images/googleLogo.jpg';
import bloombergLogo from '../../images/bloombergLogo.png';
import microsoftLogo from '../../images/microsoftLogo.png';

import blackrockLogo from '../../images/blackrockLogo.png';
import simonLogo from '../../images/simonLogo.png';
import morganLogo from '../../images/morganLogo.png';
import nbcLogo from '../../images/nbcLogo.png';
import zillowLogo from '../../images/zillowLogo.png';
import conLogo from '../../images/conLogo.png';

function Companies() {

  const leftMarqueeContent = [googleLogo, facebookLogo, bloombergLogo, amazonLogo, microsoftLogo, twoSigmaLogo];
  const rightMarqueeContent = [blackrockLogo, simonLogo, morganLogo, nbcLogo, zillowLogo, conLogo];

  return (
    <div className='companies_main'>
      <div className='companies_container'>
        <div className='companies_heading'>
          <h1>With Great Outcomes.</h1>
          <p>Our customers have gotten offers from awesome companies.</p>
        </div>
        <div className='marquee'>
          <ul className='marquee_content_left'>
            {
              leftMarqueeContent.map((element, index) =>
                <li key={index}>
                  <img className='companyLogo' src={element} />
                </li>)
            }
            <li><img className='companyLogo' src={googleLogo} /></li>
            <li><img className='companyLogo' src={facebookLogo} /></li>
            <li><img className='companyLogo' src={bloombergLogo} /></li>
          </ul>
        </div>
        <div className='marquee'>
          <ul className='marquee_content_right'>
            {
              rightMarqueeContent.map((element, index) =>
                <li key={index}>
                  <img className='companyLogo' src={element} />
                </li>)
            }
            <li><img className='companyLogo' src={blackrockLogo} /></li>
            <li><img className='companyLogo' src={simonLogo} /></li>
            <li><img className='companyLogo' src={morganLogo} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Companies;
