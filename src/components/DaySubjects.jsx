import React from 'react';
import Subject from './Subject';

function DaySubjects({subjects}) {

    let subjectsList = []

    // console.log([].concat(...subjects));
    // console.log(...subjects);
    subjectsList.push(...subjects)

    // subjects.map( (subject, index)=>{

    //     let temp = subject.map( el=>{
    //         return 'test '
    //     })

    //     subjectsList = [ ...subjectsList , ...temp]

    //     // subject.forEach( el => {
    //     //     return 'test '
    //     //     // return( 
    //     //     //     <Subject
    //     //     //         subjectName={'test'}
    //     //     //         subjectNumber={index+1}
    //     //     //         subjectTeacher={'Tester'}
    //     //     //         subjectType={'пр'}    
    //     //     //     />
    //     //     // )
    //     // })
    // })

    console.log(subjectsList);


    return (
        <div className='day-subjects__container'>
            <h2>{subjects.length}</h2>
            {/* {subjectsList} */}
            
        </div>
    );
}

export default DaySubjects;