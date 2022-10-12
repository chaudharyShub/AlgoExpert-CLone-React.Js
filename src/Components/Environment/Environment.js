import React from 'react';
import './Environment.css';
import HeadingDesc from '../HeadingDesc';
import environment from '../../images/environment.png';

function Environment() {
  return (
    <div className='environment_main'>
      <div className='environmentContainer'>
        <HeadingDesc
          heading='The Perfect Practice Environment.'
          desc="In an ideal world, you'd prepare for coding interviews by writing out solutions to problems in your language of choice, getting some hints if necessary, running your code against test cases, and looking at solutions when done.

          We've turned that ideal world into the real world. Pick a language. Read the prompt. Write your solution. Run your code. Get some hints. Run your code again. Check the output. Pass the tests. View our solution. Watch our video. All within the same workspace."
        />
        <button className='button dsa_button'>Try Our Workspace</button>
      </div>
      <img src={environment} />
    </div>
  );
}

export default Environment;
