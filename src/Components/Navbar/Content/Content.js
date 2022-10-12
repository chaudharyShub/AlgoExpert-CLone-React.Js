import './Content.css';
import React, { useState } from 'react';
import ContentItem from './ContentItem/ContentItem';
import rightArrow from '../../../images/rightArrow.png';
import {
    algoExpert,
    systemExperts,
    mlExpert,
    frontEndExpert,
    bonus
} from '../../../Details';

function Content({ value }) {

    const blue = { backgroundColor: '#626ee3', color: 'white' }
    const maroon = { backgroundColor: '#890023', color: 'white' }
    const orange = { backgroundColor: '#f37f1b', color: 'white' }
    const dGreen = { backgroundColor: '#11967e', color: 'white' }
    const lgreen = { backgroundColor: '#f21b3f', color: 'white' }

    const arr = [
        { title: 'AlgoExpert', id: "algoExpert", color: blue },
        { title: 'SystemExperts', id: "systemExperts", color: maroon },
        { title: 'MLExpert', id: "mlExpert", color: orange },
        { title: 'FrontEndExpert', id: "frontEndExpert", color: dGreen },
        { title: 'Bonus', id: "bonus", color: lgreen }
    ]

    const [array, setArray] = useState(algoExpert);
    const [style, setStyle] = useState(blue);
    const [isHover, setHover] = useState({
        algoExpert: false,
        systemExperts: false,
        mlExpert: false,
        frontEndExpert: false,
        bonus: false
    });


    const handleNav = (e) => {

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
        setHover(prevState => ({
            ...prevState,
            [id]: true
        }));
    };

    return (
        <div className='contentMain' style={{ display: value ? 'flex' : 'none' }}>
            <ul className='firstContainer' >
                {
                    arr.map(({ title, id, color }) => (
                        <li
                            onMouseEnter={e => {
                                handleNav(e);
                            }}
                            onMouseLeave={(e) => {
                                setHover((prevState) => ({
                                    ...prevState,
                                    [e.target.id]: false
                                }));
                            }}
                            style={{
                                backgroundColor: `${isHover[id] ? color.backgroundColor : "white"}`,
                                color: `${isHover[id] ? color.color : "#02203c"}`
                            }}
                            id={id} >
                            {title}
                            <img src={rightArrow} />
                        </li>
                    ))
                }
            </ul>

            <div className='secondContainer' style={style}>
                {
                    (array.length > 0) ? array.map(element => (
                        <ContentItem img={element.img} heading={element.heading} />
                    )) : null
                }
            </div>
        </div>
    );
}

export default Content;
