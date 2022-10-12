import React from 'react';
import './Overview.css';
import HeadingDesc from '../HeadingDesc';
import { overviewContent } from '../../Details';
import OverviewItems from './OverviewItems/OverviewItems';

function Overview() {
  return (
    <div className='outerOverviewParent'>
      <div className='overview_main'>
        <HeadingDesc
          heading="Our Videos Set Us Apart."
          desc="The truth is that interview questions and algorithms are difficult. Even more difficult is trying to understand the inner workings of a complex algorithm from a book or from a poorly thought-out video shot on your grandma's camera. Our crisp 1080p videos boast crystal-clear audio and are strategically divided into two parts to give you the most comprehensive explanations to questions. That's over 100 hours of content specifically tailored to make interview questions and algorithms easy."
        />
        <div className='overviewItemsParent'>
          {
            overviewContent.map((element, index) => (
              <OverviewItems
                key={index}
                img={element.img}
                heading={element.heading}
                desc={element.description}
              />
            ))
          }
        </div>
      </div>
      <div className='iFrame'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eGE-tFalwpA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Overview;
