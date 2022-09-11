import React from 'react';
import Subject from './Subject';

function SubjectList({subjects, number, weekNumber}) {

    let subjectList = []


    if(subjects.length === 0 ){
        // subjectList = <Subject
        //     subjectName={'-------------------------------------------'}
        //     subjectNumber={number}
        //     subjectTeacher={'--------------'}
        //     subjectType={'---'}
        // />
    }else{
        subjectList = subjects.map( (subject,index) =>{
            if(subject.weeks === null || subject.weeks.includes(weekNumber)){
                return(
                    <Subject
                        key={index}    
                        subjectName={subject.name}
                        subjectNumber={number}
                        subjectTeacher={subject.tutor}
                        subjectType={subject.type}
                        subjectPlace={subject.place}
                    />
                )
            }    
        })
    }


    return (
        <div className='subject-list'>
            {subjectList}
        </div>
    );
}

export default SubjectList;