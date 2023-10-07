import React from 'react';
import { Motion, spring } from 'react-motion';


function EventLine({ left, width, fillingMotion, backgroundColor }) {

    return (
        <Motion style={{
            tWidth: spring(width, fillingMotion),
            tLeft: spring(left, fillingMotion),
        }}>{({ tWidth, tLeft }) =>
            <span
                aria-hidden='true'
                className='timeline-eventline'
                style={{
                    position: 'absolute',
                    left: `${tLeft}px`,
                    top: 0,
                    height: '100%',
                    width: `${tWidth}px`,
                    transformOrigin: 'left center',
                    backgroundColor
                }}
            />
            }</Motion>
    );
}
;
export default EventLine;

