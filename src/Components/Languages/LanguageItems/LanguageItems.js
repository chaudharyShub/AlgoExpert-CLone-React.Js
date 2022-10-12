import React from 'react';
import './LanguageItems.css';

function LanguageItems({img, languageName, desc}) {
    return (
        <div className='languageItems_main'>
            <div className='languageItem_content'>
                <img src={img} />
                <strong>{languageName},</strong>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default LanguageItems;
