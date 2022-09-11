import React, { useEffect, useState } from 'react';
import ArrowButton from './ArrowButton';
import Day from './Day';
import { fillWeek, getDayByDate } from './supportingFunctions';

function Week({setSelectedDay, selectedDay, weekSchedule, weekNumber}) {


    const firstDay = new Date('September 1, 2022')
    const lastDay = new Date('December 21, 2022')

    let week = fillWeek(selectedDay) 
    useEffect(()=>{
        week = fillWeek(selectedDay) 
    },[selectedDay])


    function handleChangeWeek(days){

        if( selectedDay.addDays(days) < firstDay){
            setSelectedDay(firstDay)
        }else if(selectedDay.addDays(days) > lastDay){
            setSelectedDay(lastDay)
        }else{
            setSelectedDay(selectedDay.addDays(days))
        }
    }

    return (
        <div className='week-container'>
            <ArrowButton
                type={'prev'}
                onClick={()=> handleChangeWeek(-7)}
            />

            {week.map(
                    (day,index)=>{
                        return (<Day
                            date={day.day}
                            key={index}
                            setDay={setSelectedDay}
                            day={selectedDay}
                            weekSchedule={weekSchedule}
                            weekNumber={weekNumber}
                        />)
                    }
                )
            }
            <ArrowButton
                type={'next'}
                onClick={()=> handleChangeWeek(7)}
            />
        </div>
    );
}

export default Week;