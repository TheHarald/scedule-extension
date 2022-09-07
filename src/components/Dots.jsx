import React from 'react';
import './index.css'
import { isEqualDay } from './supportingFunctions';

function Dots({weekSchedule, date}) {

    let scheduleDots = []
    let todaySchedule = weekSchedule.filter((daySchedule)=> isEqualDay(daySchedule.day, date))[0].subjects

    todaySchedule.map( (subject, index)=>{
        if(subject.length === 0){
            scheduleDots.push(<span key={index} className='week-dots-container__dot'></span>)
        }else{
            scheduleDots.push(<span key={index} className='week-dots-container__dot active'></span>)
        }
    })


    return (
        <div className='week-dots-container'>
            <div className='week-dots__row'>
                {scheduleDots.slice(0,3)}
            </div>
            <div className='week-dots__row'>
                {scheduleDots.slice(3,6)}
            </div>
        </div>
    );
}

export default Dots;