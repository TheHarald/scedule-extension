import React from 'react';
import './index.css'

function Subject({subjectNumber, subjectName, subjectTeacher, subjectType, subjectPlace}) {
    
    subjectName ?? '---'
    subjectTeacher ?? '---'
    subjectType ?? '---'
    
    let startTime, endTime
    switch (subjectNumber) {
        case 1:
            startTime='09:00'
            endTime='10:30'
            break;
        case 2:
            startTime='10:40'
            endTime='12:10'
            break;
        case 3:
            startTime='12:40'
            endTime='14:10'
            break;
        case 4:
            startTime='14:20'
            endTime='15:50'
            break;
        case 5:
            startTime='16:20'
            endTime='17:50'
            break;
        case 6:
            startTime='18:00'
            endTime='19:30'
            break;
    
        
    }
    return (
        <article className='subect__container'>
            <div className='subject__main-info'>
                <div className='subject__time'>
                    <span className='subject__number'>{subjectNumber}</span>
                    <div className='time__container'>
                        <span className='time'>{startTime}</span>
                        <span className='time'>{endTime}</span>
                    </div>
                </div>
                <div className='subject'>
                    <p className='subject__title'>{subjectName}</p>
                    <p className='subject__title primary'>{subjectPlace}</p>
                    <p className='subject__teacher'>{subjectTeacher}</p>
                </div>
            </div>
            <span className='subject__type'>{subjectType}</span>
        </article>
    );
}

export default Subject;