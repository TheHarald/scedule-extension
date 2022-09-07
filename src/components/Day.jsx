import React from 'react';
import Dots from './Dots';
import { getDayByDate, isEqualDay, isToday } from './supportingFunctions';

function Day({date, day, setDay, weekSchedule}) {

    let dayContainerClass = 'day-conatiner'
    if(isToday(date)){
        dayContainerClass+=' today'
    }

    if(isEqualDay(day,date)){
        dayContainerClass+=' selected'
    }

    function handleClick(){
        setDay(date)
    }

     
    return (
        <div className={dayContainerClass} onClick={handleClick}>
            <p className='day'>{getDayByDate(date)}</p>
            <p className='day-number'>{date.getDate()}</p>
            <Dots 
                weekSchedule={weekSchedule}
                date={date}
            />
            
        </div>
    );
}

export default Day;