import React from 'react';
import Dots from './Dots';
import { getDayByDate } from './supportingFunctions';

function Day({date}) {

    const today = new Date();
    let dayContainerClass = 'day-conatiner'
    if(today.getDate() === date.getDate()){
        
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