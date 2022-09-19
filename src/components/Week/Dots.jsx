import React from 'react';
import '../index.css'
import { isEqualDay } from '../supportingFunctions';

function Dots({weekSchedule, date , weekNumber}) {

    let scheduleDots = []
    let todaySchedule = weekSchedule.filter((daySchedule)=> isEqualDay(daySchedule.day, date))[0].subjects

    todaySchedule.map((subject, index)=>{
    
        if(subject.length === 0){
            scheduleDots.push(<span key={index} className='week-dots-container__dot'></span>)
        }else{
            if(subject[0].weeks === null || subject[0].weeks.includes(weekNumber) ){
                switch (subject[0].type) {
                    case 'П':
                        scheduleDots.push(<span key={index} className='week-dots-container__dot active prcatice'></span>)
                        break;
                    case 'ЛБ':
                        scheduleDots.push(<span key={index} className='week-dots-container__dot active lab'></span>)
                        break;
                    case 'Л':
                        scheduleDots.push(<span key={index} className='week-dots-container__dot active lection'></span>)
                        break;
                
                    default:
                        scheduleDots.push(<span key={index} className='week-dots-container__dot active prcatice'></span>)
                        break;
                }
            }else{
                scheduleDots.push(<span key={index} className='week-dots-container__dot'></span>)
            }

            
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