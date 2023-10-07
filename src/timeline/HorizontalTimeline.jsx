import React from 'react';
import Radium from 'radium';
import dimensions from 'react-dimensions';

// Components
import EventsBar from './EventsBar';

function HorizontalTimeline({ index, values, indexClick, getLabel, minEventPadding, maxEventPadding,
    linePadding, labelWidth, styles, fillingMotion, slidingMotion, isOpenEnding, isOpenBeginning, isTouchEnabled, isKeyboardEnabled }) {

    const containerWidth = 1000;
    const containerHeight = 1000;

    getLabel = (date, index) => (new Date(date)).toDateString().substring(4);

    const daydiff = (first, second) => Math.round((second - first));
    const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));

    const dateDistanceExtremes = (dates) => {
        // determine the minimum distance among events
        const datePairs = zip([dates.slice(0, -1), dates.slice(1)]);
        const dateDistances = datePairs.map(([x, y]) => daydiff(x, y));

        // return the minimum distance between two dates but considering that all dates
        // are the same then return the provided minimum seperation.
        return {
            min: Math.min.apply(null, dateDistances),
            max: Math.max.apply(null, dateDistances)
        };
    };

    const cummulativeSeperation = (dates, labelWidth, minEventPadding, maxEventPadding, startPadding) => {
        // using dynamic programming to set up the distance from the origin of the timeline.
        const distances = new Array(dates.length);
        distances[0] = startPadding;

        // Calculating the minimum seperation between events
        const dateExtremes = dateDistanceExtremes(dates);
        const datesDiff = dateExtremes.max - dateExtremes.min;
        const paddingDiff = maxEventPadding - minEventPadding;
        // const halfLabel = labelWidth / 2;


        for (let index = 1; index < distances.length; index += 1) {
            const distance = daydiff(dates[index - 1], dates[index]);
            // relative spacing according to min and max seperation
            const seperation = datesDiff === 0
                ? maxEventPadding
                : Math.round((((distance - dateExtremes.min) * paddingDiff) / datesDiff) + minEventPadding);
            // the distance_from_origin(n) = distance_from_origin(n-1) + distance between n and n - 1.
            distances[index] = distances[index - 1] + labelWidth + seperation;
        }
        return distances;
    };

    const getReturn = () => {
        if (!containerWidth) {
            //As long as we do not know the width of our container, do not render anything!
            return false;
        }

        // Convert the date strings to actual date objects
        const dates = values.map((value) => new Date(value));
        // Calculate the distances for all events
        const distances = cummulativeSeperation(
            dates,
            labelWidth,
            minEventPadding,
            maxEventPadding,
            linePadding,
        );

        // Convert the distances and dates to events
        const events = distances.map((distance, index) => ({
            distance,
            label: getLabel(values[index], index),
            date: values[index],
        }));

        const visibleWidth = containerWidth - 80;

        const totalWidth = Math.max(
            events[events.length - 1].distance + linePadding,
            visibleWidth
        );

        let barPaddingRight = 0;
        let barPaddingLeft = 0;
        if (!isOpenEnding) {
            barPaddingRight = totalWidth - events[events.length - 1].distance;
        }
        if (!isOpenBeginning) {
            barPaddingLeft = events[0].distance;
        }

        return (
            <EventsBar
                width={containerWidth}
                height={containerHeight}
                events={events}
                isTouchEnabled={isTouchEnabled}
                totalWidth={totalWidth}
                visibleWidth={visibleWidth}
                index={index}
                styles={styles}
                indexClick={indexClick}
                labelWidth={labelWidth}
                fillingMotion={fillingMotion}
                barPaddingRight={barPaddingRight}
                barPaddingLeft={barPaddingLeft}
            />
        );
    }

    return (
        getReturn()
    );
}
;
export default HorizontalTimeline;

