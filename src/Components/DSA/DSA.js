import React from 'react';
import './DSA.css';
import HeadingDesc from '../HeadingDesc';
import dsa_image from '../../images/dsa_image.png';

function DSA() {
  return (
    <div className='dsaMain'>
      <div className='innerDsaMain'>
        <HeadingDesc
          heading="Data Structures Crash Course."
          desc="Algorithms and data structures go hand in hand; the solution to virtually any coding interview problem will require the implementation of some kind of abstract data type in order to access and manipulate information.
        Our video series on data structures is the ultimate crash course on this important topic. We cover fundamental concepts pertaining to memory, complexity analysis, and Big O notation, and then break down popular data structures to give you a detailed look at how these concepts are applied under the hood. Linked Lists and Binary Trees will never instill fear in your heart again."
        />
        <button className='button dsaButton'>Start the Course</button>
      </div>
      <img src={dsa_image} />
    </div>
  );
}

export default DSA;
