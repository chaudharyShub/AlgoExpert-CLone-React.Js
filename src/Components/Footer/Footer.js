import React from 'react';
import './Footer.css';

function Footer() {

  const footerDetails = ['Contact Us', 'FAQ', 'Reviews', 'Blog', 'Jobs', 'SWE Project Contests', 'Legal Stuff', 'Privacy Policy'];

  return (
    <footer className='footer_main'>
      <ul className='footer_list'>
        {
          footerDetails.map((element, index) => <li key={index}>{element}<span style={{ marginLeft: '1em' }}> | </span></li>)
        }
      </ul>
      <p>Copyright © 2017-2022 AlgoExpert LLC. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
