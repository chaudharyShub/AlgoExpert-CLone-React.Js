import './Testimonial.css';
import React, { useEffect, useState } from 'react';
import { testimonialDetails } from '../../Details';

function Testimonial() {

    const [page, setPage] = useState(1);
    const [itemArray, setItemArray] = useState([]);
    const arrayLength = testimonialDetails.length;

    let noOfItems;
    if (window.screen.availWidth < 600) {
        noOfItems = 1;
    }
    else if (window.screen.availWidth > 600 && window.screen.availWidth < 940) {
        noOfItems = 2;
    }
    else {
        noOfItems = 3;
    }

    function adjustPage(noOfItems, arrayOfItems, page) {
        const starting = noOfItems * (page - 1);
        const ending = starting + noOfItems;
        const trimmedItems = arrayOfItems.slice(starting, ending);
        setItemArray(trimmedItems);
    }

    function prevPage() {
        setPage(prevState => prevState - 1);
    }

    function nextPage() {
        setPage(prevState => prevState + 1);
    }

    useEffect(() => {
        adjustPage(noOfItems, testimonialDetails, page);
    }, [page]);

    return (
        <div className='testimonial_main'>
            <p className='table_heading'>And Over 125,000 Satisfied Engineers.</p>
            <div className='testimonialContainer'>
                {
                    itemArray.map((element, index) => (
                        <div key={index} className='testimonial_block'>
                            <img id='img' src={element.img} />
                            <h3>{element.name} <br /> {element.position}</h3>
                            <p>{element.company}</p>
                            <p id='desc'>{element.desc}</p>
                        </div>
                    ))
                }
            </div>
            <div className='arrows'>

                <button
                    disabled={page <= 1 ? true : false}
                    style={page <= 1
                        ? { cursor: 'not-allowed' }
                        : { cursor: 'pointer' }}
                    onClick={() => prevPage()}
                >&larr;</button>

                <button
                    disabled={page >= Math.ceil(arrayLength / noOfItems)
                        ? true
                        : false}
                    style={page >= Math.ceil(arrayLength / noOfItems)
                        ? { cursor: 'not-allowed' }
                        : { cursor: 'pointer' }}
                    onClick={() => nextPage()}
                >&rarr;</button>

            </div>
            <button href='#' id="read_more">Read More Testimonials</button>
        </div>
    );
}

export default Testimonial;
