import React from 'react';
import Subject from './Subject';
import SubjectList from './SubjectList';

function DaySubjects({subjects}) {


    return (
        <div className='day-subjects__container'>
            {
                subjects.map( (subjectList, index)=>{
                    return(
                        <SubjectList
                        key={index}
                            subjects={subjectList}
                            number={index+1}
                        /> 
                    )
                })
            }
                       
        </div>
    );
}

export default DaySubjects;