import React, { useEffect, useState } from 'react';
import ArrowButton from './ArrowButton';
import Day from './Day';
import { fillWeek, getDayByDate } from './supportingFunctions';

function Week() {

    const days = ['пн','вт','ср','чт','пт','сб','вс']

    const [today,setToday] = useState(new Date())

    let week = fillWeek(today) 
    useEffect(()=>{
        week = fillWeek(today) 
        console.log(week);
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
                            date={day}
                            key={index}
                        />)
                    }
                )
            }
            {/* <Day day={'пн'} dayNumber={1}/>
            <Day day={'вт'} dayNumber={2}/>
            <Day day={'ср'} dayNumber={14}/>
            <Day day={'чт'} dayNumber={15}/>
            <Day day={'пт'} dayNumber={16}/>
            <Day day={'сб'} dayNumber={17}/> */}
            <ArrowButton
                type={'next'}
                onClick={()=> setToday(today.addDays(7))}
            />
        </div>
    );
}

export default Week;