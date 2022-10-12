import React from 'react';

function HeadingDesc({heading, desc}) {
    return (
        <div>
            <p className='table_heading'>{heading}</p>
            <p className='overview_desc'>{desc}</p>
        </div>
    );
}

export default HeadingDesc;
