import React, { useEffect, useState } from 'react';
import ArrowButton from './ArrowButton';
import Day from './Day';
import { fillWeek, getDayByDate } from './supportingFunctions';

function Week({handleDayClick, selectedDay}) {

    const [today,setToday] = useState(new Date())
    let week = fillWeek(today) 
    useEffect(()=>{
        week = fillWeek(today) 
    },[today])

    return (
        <div className='week-container'>
            <ArrowButton
                type={'prev'}
                onClick={()=> setToday(today.addDays(-7))}
            />

            {
                week.map(
                    (day,index)=>{
                        return (<Day
                            date={day.day}
                            key={index}
                            setDay={handleDayClick}
                            day={selectedDay}
                        />)
                    }
                )
            }
            <ArrowButton
                type={'next'}
                onClick={()=> setToday(today.addDays(7))}
            />
        </div>
    );
}

export default Week;