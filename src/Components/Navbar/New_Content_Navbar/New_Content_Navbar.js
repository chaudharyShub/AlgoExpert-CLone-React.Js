import React, { useState } from 'react';
import './New_Content_Navbar.css';
import rightArrow from '../../../images/rightArrow.png';
import ContentItem from '../Content/ContentItem/ContentItem';
import {
  algoExpert,
  systemExperts,
  mlExpert,
  frontEndExpert,
  bonus
} from '../../../Details';
import '../Content/Content.css';

function New_Content_Navbar({ value }) {

  const blue = { backgroundColor: '#626ee3', color: 'white' }
  const maroon = { backgroundColor: '#890023', color: 'white' }
  const orange = { backgroundColor: '#f37f1b', color: 'white' }
  const dGreen = { backgroundColor: '#11967e', color: 'white' }
  const lgreen = { backgroundColor: '#f21b3f', color: 'white' }
  const arr = [
    { title: 'AlgoExpert', id: 'algoExpert', color: blue },
    { title: 'SystemExperts', id: 'systemExperts', color: maroon },
    { title: 'MLExpert', id: 'mlExpert', color: orange },
    { title: 'FrontEndExpert', id: 'frontEndExpert', color: dGreen },
    { title: 'Bonus', id: 'bonus', color: lgreen }
  ]

  const [array, setArray] = useState(algoExpert);
  const [style, setStyle] = useState(blue);
  const [isActive, setIsActive] = useState('algoExpert');

  function handleEvent(e) {

    const id = e.target.id;
    let a = [];
    let s = {};

    switch (id) {
      case "algoExpert":
        a = algoExpert;
        s = blue;
        break;

      case "systemExperts":
        a = systemExperts;
        s = maroon;
        break;

      case "mlExpert":
        a = mlExpert;
        s = orange;
        break;

      case "frontEndExpert":
        a = frontEndExpert;
        s = dGreen;
        break;

      case "bonus":
        a = bonus;
        s = lgreen;
        break;

      default:
        a = algoExpert
        s = blue;
        break;
    }
    setArray(a);
    setStyle(s);
  }

  return (
    <div className='contentMain' style={{ display: value ? 'flex' : 'none' }}>

      <ul className='firstContainer' >
        {
          arr.map(({ id, title, color }) => (
            <li
              key={id}
              onMouseEnter={(e) => {
                handleEvent(e);
                setIsActive(e.target.id);
              }}
              id={id}
              style={{
                backgroundColor: `${isActive === id ? color.backgroundColor : 'white'}`,
                color: `${isActive === id ? color.color : '#02203c'}`
              }}
            >
              {title}
              <img src={rightArrow} />
            </li>
          ))
        }
      </ul>

      <div className='secondContainer' style={style}>
        {
          array.map((element, index) => (
            <ContentItem
              key={index}
              img={element.img}
              heading={element.heading}
            />
          ))
        }
      </div>
    </div>
  );
}

export default New_Content_Navbar;
