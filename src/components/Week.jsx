import React, { useEffect, useState } from 'react';
import ArrowButton from './ArrowButton';
import Day from './Day';
import { fillWeek, getDayByDate } from './supportingFunctions';

function Week({setSelectedDay, selectedDay, weekSchedule}) {

    let week = fillWeek(selectedDay) 
    useEffect(()=>{
        week = fillWeek(selectedDay) 
    },[selectedDay])

    return (
        <div className='week-container'>
            <ArrowButton
                type={'prev'}
                onClick={()=> setSelectedDay(selectedDay.addDays(-7))}
            />

            {week.map(
                    (day,index)=>{
                        return (<Day
                            date={day.day}
                            key={index}
                            setDay={setSelectedDay}
                            day={selectedDay}
                            weekSchedule={weekSchedule}
                        />)
                    }
                )
            }
            <ArrowButton
                type={'next'}
                onClick={()=> setSelectedDay(selectedDay.addDays(7))}
            />
        </div>
    );
}

export default Week;