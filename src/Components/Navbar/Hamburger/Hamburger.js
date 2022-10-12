import './Hamburger.css';
import React from 'react';
import close from '../../../images/close.png';
import algoLogo from '../../../images/algoLogo.png';
import rightArrow from '../../../images/rightArrow.png';

function Hamburger({ customStyle, customStyleMethod }) {

    return (
        <div className='hamburgerMain' style={{ display: customStyle ? "block" : 'none' }}>
            <p className='close' onClick={() => customStyleMethod(!customStyle)}><img src={close} /></p>
            <div className='divContent'>
                <div className='hamburgerHeading'>
                    <div id='upper'>
                        <div id='logoImg'>
                            <img src={algoLogo} />
                        </div>
                        <p id='logoText'>
                            AlgoExpert
                        </p>
                    </div>
                    <div id='lower'>
                        <p>Ace the Technical Interviews</p>
                    </div>
                </div>
                <div className='hamburgerComponent'>
                    <ul className='hamburgerList'>
                        <li>Products <img src={rightArrow} /></li>
                        <li>Content</li>
                        <li>Team</li>
                        <li>Purchase</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Hamburger;
