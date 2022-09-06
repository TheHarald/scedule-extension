import React from 'react';
import Subject from './Subject';
import SubjectList from './SubjectList';

function DaySubjects({subjects}) {

    let daySchedule

    if(subjects.length === 0){
        daySchedule = <h1>Выходной</h1>
    }else{
        daySchedule = subjects.map( (subjectList, index)=>{
            return(
                <SubjectList
                    key={index}
                    subjects={subjectList}
                    number={index+1}
                /> 
            )
        })
    }


    return (
        <div className='day-subjects__container'>
            {daySchedule}
                       
        </div>
    );
}

export default DaySubjects;