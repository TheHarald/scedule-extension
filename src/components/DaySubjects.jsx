import React from 'react';
import Subject from './Subject';

function DaySubjects({subjects}) {
    return (
        <div className='day-subjects__container'>
            {
                subjects.map( (subject, index)=>{
                    console.log(index,'test');
                    subject.map( sub=>{
                        return (
                            <Subject
                                subjectNumber={index+1}
                                subjectName={sub.name}
                                subjectTeacher={sub.tutor}
                                subjectType={sub.type}
                            />
                        )
                    } )
                })
            }
        </div>
    );
}

export default DaySubjects;