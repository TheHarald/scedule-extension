import React from 'react';
import Dots from './Dots';
import { getDayByDate, isToday } from './supportingFunctions';

function Day({date}) {

    let dayContainerClass = 'day-conatiner'
    if(isToday(date)){
        dayContainerClass+=' today'
    }

     
    return (
        <div className={dayContainerClass}>
            <p className='day'>{getDayByDate(date)}</p>
            <p className='day-number'>{date.getDate()}</p>
            <Dots/>
        </div>
    );
}

export default Day;