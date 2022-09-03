import React from 'react';
import Dots from './Dots';

function Day({day, dayNumber}) {
    return (
        <div className='day-conatiner'>
            <p className='day'>{day}</p>
            <p className='day-number'>{dayNumber}</p>
            <Dots/>
        </div>
    );
}

export default Day;