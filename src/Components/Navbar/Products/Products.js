import React from 'react';
import './Products.css';

function Products({ value }) {
    const arr = [
        { title: 'AlgoExpert', detail: 'Ace the coding interviews.' },
        { title: 'SystemExperts', detail: 'Ace the systems design interviews.' },
        { title: 'MLExpert', detail: 'Ace the machine learning interviews.' },
        { title: 'FrontEndExpert', detail: 'Ace the frontend interviews.' },
        { title: 'ProgrammingExpert', detail: 'Learn to code.' },
    ];

    return (
        <div className='productsMain' style={{ display: value ? 'block' : 'none' }}>
            <ul className='productListContainer'>
                {
                    arr.map((element, index) => <li key={index}>{element.title} <p>{element.detail}</p> </li>)
                }
            </ul>
        </div>
    );
}

export default Products;
