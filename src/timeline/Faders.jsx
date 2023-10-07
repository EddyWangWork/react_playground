import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import Color from 'color';

const LEFT = 'left';
const RIGHT = 'right';

function Faders({ styles }) {

    console.log(styles);

    const faderStyle = {
        base: {
            top: '50%',
            position: 'absolute',
            bottom: 'auto',
            transform: 'translateY(-50%)',
            height: '100%',
            width: 20,
            overflow: 'hidden'
        },
        baseLeft: {
            left: 40,
            backgroundImage: `linear-gradient(to right, ${styles.background}, ${Color(styles.background).alpha(0).rgb()})`
        },
        baseRight: {
            right: 40,
            backgroundImage: `linear-gradient(to left, ${styles.background}, ${Color(styles.background).alpha(0).rgb()})`
        },
        specific: (styles, position, gradientDirection) => ({
            [position]: 40,
            backgroundImage: `linear-gradient(to ${gradientDirection}, ${styles.background}, ${Color(styles.background).alpha(0).rgb()})`
        })
    };

    return (
        <ul style={{ listStyle: 'none' }}>
            <li style={{ ...faderStyle.base, ...faderStyle.baseLeft }} />
            <li style={{ ...faderStyle.base, ...faderStyle.baseRight }} />
            {/* <li style={{ ...faderStyle.base, ...faderStyle.baseRight }} /> */}
        </ul>
    );
}
;
export default Faders;

