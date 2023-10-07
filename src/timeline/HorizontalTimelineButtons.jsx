import React from 'react';
import Radium from 'radium';

// icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function HorizontalTimelineButtons({ updateSlide, position, styles, maxPosition }) {

    const constVale = {
        // Left and right are used to control the direciton in which we want to translate our
        // timeline
        LEFT: 'left',
        RIGHT: 'right',

        // The keycodes of all the arrow keys (used for keyboard navigation)
        LEFT_KEY: 37,
        RIGHT_KEY: 39,
        UP_KEY: 38,
        DOWN_KEY: 40,

        // Milliseconds in a given day (required to set the minimum seperation on events)
        DAY: 86400000,
        // Total length of the timeline in pixels
        MIN_TIMELINE_WIDTH: 750,
        // Minimum padding between two event labels
        MIN_EVENT_PADDING: 20,
        // Maximum padding between two event labels
        MAX_EVENT_PADDING: 120,
        // width of the area for text in the timeline
        DATE_WIDTH: 85,
        // Padding at end of timeline
        TIMELINE_PADDING: 100,

        // which events to trigger based on the left or the right arrow key on the keyboard is pressed
        KEYMAP: {
            37: 'left',
            39: 'right'
        }
    };

    const buttonStyles = {
        link: ({ outline }) => ({
            position: 'absolute',
            top: '49px',
            bottom: 'auto',
            transform: 'translateY(-50%)',
            height: 34,
            width: 34,
            borderRadius: '50%',
            border: `2px solid ${outline}`,
            overflow: 'hidden',
            textIndent: '100%',
            whiteSpace: 'nowrap',
            transition: 'border-color 0.3s',
        }),
        icon: (styles, active) => ({
            position: 'absolute',
            left: 0,
            top: '50%',
            bottom: 'auto',
            transform: 'translateY(-50%)',
            height: 20,
            width: 29,
            overflow: 'hidden',
            textIndent: '100%',
            whiteSpace: 'nowrap',
            fill: active ? styles.foreground : styles.outline
        }),
        inactive: (styles) => ({
            color: styles.outline,
            cursor: 'not-allowed',
            ':hover': {
                border: `2px solid ${styles.outline}`
            }
        }),
        active: (styles) => ({
            cursor: 'pointer',
            ':hover': {
                border: `2px solid ${styles.foreground}`,
                color: styles.foreground
            }
        })
    };

    const buttonBackEnabled = Math.round(position) < 0;
    const buttonForwardEnabled = Math.round(position) > Math.round(maxPosition);
    const baseStyles = [
        buttonStyles.link(styles),
    ];

    return (
        <ul className="buttons">
            <li
                className={`button-back ${buttonBackEnabled ? 'enabled' : 'disabled'}`}
                key={constVale.LEFT}
                onClick={() => updateSlide(constVale.LEFT)}
                style={
                    buttonStyles.link(styles)
                }
            // style={[
            //     buttonStyles.link(styles),
            //     buttonBackEnabled ? buttonStyles.active(styles) : buttonStyles.inactive(styles),
            //     { [constVale.LEFT]: 0 }
            // ]}
            >
                <FaAngleLeft
                    style={buttonStyles.icon(styles, buttonBackEnabled)}
                />
            </li>
            <li
                className={`button-forward ${buttonForwardEnabled ? 'enabled' : 'disabled'}`}
                key={constVale.RIGHT}
                onClick={() => updateSlide(constVale.RIGHT)}
            // style={[
            //     buttonStyles.link(styles),
            //     buttonForwardEnabled ? buttonStyles.active(styles) : buttonStyles.inactive(styles),
            //     { [constVale.RIGHT]: 0 }
            // ]}
            >
                <FaAngleRight
                // style={buttonStyles.icon(styles, buttonForwardEnabled)}
                />
            </li>
        </ul>
    );
}
;
export default HorizontalTimelineButtons;

