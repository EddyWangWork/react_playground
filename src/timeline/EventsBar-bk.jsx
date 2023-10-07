import { useState, React } from 'react';
import { Motion, spring } from 'react-motion';

import Events from './Events';
import EventLine from './EventLine';
import Faders from './Faders';
import HorizontalTimelineButtons from './HorizontalTimelineButtons';


function EventsBar({ width, height, events, isTouchEnabled, totalWidth, visibleWidth,
    index, styles, indexClick, labelWidth, fillingMotion, barPaddingRight, barPaddingLeft }) {

    const [state, setstate] = useState([]);
    const [touch, settouch] = useState([]);

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

    function componentWillMount() {
        document.body.addEventListener('keydown', handleKeydown);
    }

    function componentDidMount() {
        const selectedEvent = events[index];
        slideToPosition(-(selectedEvent.distance - (visibleWidth / 2)), this.props);
    }

    function componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeydown);
    }

    const handleKeydown = (event) => {
        if (isKeyboardEnabled) {
            if (event.keyCode === constVale.LEFT_KEY || event.keyCode === constVale.RIGHT_KEY) {
                this.updateSlide(constVale.KEYMAP[event.keyCode]);
            } else if (event.keyCode === constVale.UP_KEY) {
                indexClick(Math.min(selectedIndex + 1, events.length - 1));
            } else if (event.keyCode === constVale.DOWN_KEY) {
                indexClick(Math.max(selectedIndex - 1, 0));
            }
        }
    }

    const handleTouchStart = (event) => {
        const touchObj = event.touches[0];

        this.touch.coors.x = touchObj.pageX;
        this.touch.coors.y = touchObj.pageY;
        this.touch.isSwiping = false;
        this.touch.started = true;
    };

    const handleTouchMove = (event) => {
        if (!this.touch.started) {
            this.handleTouchStart(event);
            return;
        }

        const touchObj = event.touches[0];
        const dx = Math.abs(this.touch.coors.x - touchObj.pageX);
        const dy = Math.abs(this.touch.coors.y - touchObj.pageY);

        const isSwiping = dx > dy && dx > this.touch.threshold;

        if (isSwiping === true || dx > this.touch.threshold || dy > this.touch.threshold) {
            this.touch.isSwiping = isSwiping;
            const dX = this.touch.coors.x - touchObj.pageX; // amount scrolled
            this.touch.coors.x = touchObj.pageX;
            this.setState({
                position: this.state.position - (dX) // set new position
            });
        }
        if (this.touch.isSwiping !== true) {
            return;
        }
        // Prevent native scrolling
        event.preventDefault();
    };

    const handleTouchEnd = (event) => {
        // Make sure we are scrolled to a valid position
        this.slideToPosition(this.state.position);
        this.touch.coors.x = 0;
        this.touch.coors.y = 0;
        this.touch.isSwiping = false;
        this.touch.started = false;
    };

    function componentWillReceiveProps(props) {
        const selectedEvent = props.events[props.index];
        const minVisible = -this.state.position; // Position is always negative!
        const maxVisible = minVisible + props.visibleWidth;

        if (selectedEvent.distance > (minVisible + 10) && selectedEvent.distance < (maxVisible - 10)) {
            //Make sure we are not outside the view
            this.slideToPosition(this.state.position, props);
        } else {
            //Try to center the selected index
            this.slideToPosition(-(selectedEvent.distance - (props.visibleWidth / 2)), props);
        }
    }

    const slideToPosition = (position, props = this.props) => {
        // the width of the timeline component between the two buttons (prev and next)
        const maxPosition = Math.min(props.visibleWidth - props.totalWidth, 0); // NEVER scroll to the right

        this.setState({
            position: Math.max(Math.min(0, position), maxPosition),
            maxPosition
        });
    }

    const updateSlide = (direction, props = this.props) => {
        //  translate the timeline to the left('next')/right('prev')
        if (direction === constVale.RIGHT) {
            this.slideToPosition((this.state.position - props.visibleWidth) + props.labelWidth, props);
        } else if (direction === constVale.LEFT) {
            this.slideToPosition((this.state.position + props.visibleWidth) - props.labelWidth, props);
        }
    };

    const centerEvent = (index, props = this.props) => {
        const event = props.events[index];

        this.slideToPosition(-event.distance);
    }

    const touchEvents = isTouchEnabled
        ? {
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
            onTouchEnd: this.handleTouchEnd
        }
        : {};

    // filled value = distane from origin to the selected event
    const filledValue = events[index].distance - barPaddingLeft;
    const eventLineWidth = totalWidth - barPaddingLeft - barPaddingRight;

    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            {...touchEvents}
        >
            <div
                className='events-wrapper'
                style={{
                    position: 'relative',
                    height: '100%',
                    margin: '0 40px',
                    overflow: 'hidden'
                }}
            >
                <Motion
                    style={{
                        X: spring(this.state.position, this.slidingMotion)
                    }}
                >{({ X }) =>
                    <div
                        className='events'
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 49,
                            height: 2,
                            width: totalWidth,
                            WebkitTransform: `translate3d(${X}, 0, 0)px`,
                            transform: `translate3d(${X}px, 0, 0)`
                        }}
                    >
                        <EventLine
                            left={barPaddingLeft}
                            width={eventLineWidth}
                            fillingMotion={fillingMotion}
                            backgroundColor={styles.outline}
                        />
                        <EventLine
                            left={barPaddingLeft}
                            width={filledValue}
                            fillingMotion={fillingMotion}
                            backgroundColor={styles.foreground}
                        />
                        <Events
                            events={events}
                            selectedIndex={index}
                            styles={styles}
                            handleDateClick={indexClick}
                            labelWidth={labelWidth}
                        />
                    </div>
                    }</Motion>
            </div>
            <Faders styles={styles} />
            <HorizontalTimelineButtons
                maxPosition={this.state.maxPosition}
                position={this.state.position}
                styles={styles}
                updateSlide={this.updateSlide}
            />
        </div>
    );
}
;
export default EventsBar;

