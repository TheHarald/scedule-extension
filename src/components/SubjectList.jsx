import React from 'react';
import Subject from './Subject';

function SubjectList({subjects, number}) {

    let subjectList = []

    if(subjects.length === 0 ){
        subjectList = <Subject
            subjectName={'-------------------------------------------'}
            subjectNumber={number}
            subjectTeacher={'--------------'}
            subjectType={'---'}
        />
    }else{
        subjectList = subjects.map( subject =>{
            return(
                <Subject
                    subjectName={subject.name}
                    subjectNumber={number}
                    subjectTeacher={subject.tutor}
                    subjectType={subject.type}
                />
            )
        })
    }


    return (
        <div className='subject-list'>
            {
                subjectList
            }
        </div>
    );
}

export default SubjectList;