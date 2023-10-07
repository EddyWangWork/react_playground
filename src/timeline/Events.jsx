import React from 'react';
import { Motion, spring } from 'react-motion';
import TimelineDot from './TimelineDot';


function Events({ events, selectedIndex, styles, handleDateClick, labelWidth }) {

    return (
        <ol
            className='events-bar'
            style={{
                listStyle: 'none'
            }}
        >
            {events.map((event, index) =>
                <TimelineDot
                    distanceFromOrigin={event.distance}
                    label={event.label}
                    date={event.date}
                    index={index}
                    key={index}
                    onClick={handleDateClick}
                    selected={selectedIndex}
                    styles={styles}
                    labelWidth={labelWidth}
                />
            )}
        </ol>
    );
}
;
export default Events;

