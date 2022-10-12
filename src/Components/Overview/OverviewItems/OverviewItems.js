import React from 'react';
import './OverviewItems.css';

function OverviewItems({ img, heading, desc }) {
    return (
        <div className='overviewItem_main'>
            <div className='overviewItem_heading'>
                <img src={img} />
                <h3>{heading}</h3>
            </div>
            <div className='overviewItem_desc'>
                {desc}
                <a href='#' className='anchorTag'><br/>See an example</a>
            </div>
        </div>
    );
}

export default OverviewItems;
