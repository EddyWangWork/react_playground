import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';


function TimelineDot({ distanceFromOrigin, label, date, index, key, onClick, selected, styles, labelWidth }) {

    /**
     * The static/non-static styles Information for a single event dot on the timeline
     */
    const dots = {
        /**
         * The style information for the clickable dates that apper floating over the timeline
         */
        links: {
            position: 'absolute',
            bottom: 0,
            textAlign: 'center',
            paddingBottom: 15,
        },
        /**
         * The base style information for the event dot that appers exactly on the timeline
         */
        base: {
            position: 'absolute',
            bottom: -5,
            height: 12,
            width: 12,
            borderRadius: '50%',
            transition: 'background-color 0.3s, border-color 0.3s',
            ':hover': {}, // We need this to track the hover state of this element
        },
        /**
         * future: The style information for the future dot (wrt selected).
         * @param {object} styles User passed styles ( foreground, background etc info
         */
        future: (styles) => ({
            backgroundColor: styles.background,
            // border: `2px solid ${styles.background}`,
            border: `2px solid ${styles.outline}`,
        }),
        /**
         * past: The styles information for the past dot (wrt selected)
         * @param {object} styles User passed styles ( foreground, background etc info
         */
        past: (styles) => ({
            backgroundColor: styles.background,
            border: `2px solid ${styles.foreground}`,
        }),
        /**
         * present: The styles information for the preset dot
         * @param {object} styles User passed styles ( foreground, background etc info
         */
        present: (styles) => ({
            backgroundColor: styles.foreground,
            border: `2px solid ${styles.foreground}`,
        }),
    };

    const __getDotStyles__ = (dotType, key) => {
        const hoverStyle = {
            backgroundColor: styles.foreground,
            border: `2px solid ${styles.foreground}`,
        };

        return [
            dots.base,
            { left: labelWidth / 2 - dots.base.width / 2 },
            dots[dotType](styles),
            Radium.getState('', key, ':hover') || Radium.getState('', 'dot-dot', ':hover')
                ? hoverStyle
                : undefined,
        ]
    }

    let dotType = 'future';
    if (index < selected) {
        dotType = 'past';
    } else if (index === selected) {
        dotType = 'present';
    }

    return (
        <li
            key={date}
            id={`timeline-dot-${date}`}
            className={`${dotType} dot-label`}
            onClick={() => onClick(index)}
        // style={[
        //     dots.links,
        //     {
        //         left: distanceFromOrigin - labelWidth / 2,
        //         cursor: 'pointer',
        //         width: labelWidth,
        //         ':hover': {}, // We need this to track the hover state of this element
        //     }
        // ]}
        >
            {label}
            <span
                key='dot-dot'
            // style={__getDotStyles__(dotType, date)}
            />
        </li>
    );
}
;
export default TimelineDot;

