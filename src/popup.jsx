import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import Week from "./components/Week";
import Subject from "./components/Subject";
import { fillWeek, getScheduleByDay, isToday } from "./components/supportingFunctions";
import DaySubjects from "./components/DaySubjects";


function Popup(){

    
    const [schedule,setSchedule] = useState({})
    const [testScedule,setTestScedule] = useState([]) // refactor
    const [isLoading,setIsLoading] = useState(true)

    const [selectedDay,setSelectedDay] = useState(new Date())

    let semester = []
    let startDay = new Date('September 1, 2022');
    for( let i = 0; i<17;i++){
        semester.push(fillWeek(startDay.addDays(i*7)))
    }

    function fillSemestr(semester,weekSchedule){ // move to SF
        semester.map( (week,index) =>{
            let weekType = index % 2 ?  'even':'odd'

            week.map( (day,index)=>{
                if(index === 6){ 
                    week[index] = {...day, subjects:[]}
                }else{
                    week[index] = {...day, subjects: weekSchedule[index][weekType]  }
                }
            })
        })

    }


    useEffect(()=>{
        const url ='https://mirea.xyz/api/v1.3/groups/certain?name=%D0%98%D0%92%D0%91%D0%9E-07-19'
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
            setSchedule(data[0])
            fillSemestr(semester,data[0].schedule)
            console.log(semester);
            setTestScedule(semester)
            setIsLoading(false)
        }
        )
    },[])

    useEffect(()=>{
        // console.log('test-> ',testScedule);
        // console.log(getScheduleByDay(today, testScedule));
    },[testScedule])
    
    return(
        <div className="popup">
            {isLoading?
                <h2>Loading...</h2>
                :
                <div>
                    <h2>{schedule.groupName}</h2>
                    <Week 
                        handleDayClick={setSelectedDay}
                        selectedDay={selectedDay}
                    />
                    <DaySubjects subjects={getScheduleByDay(selectedDay,testScedule).subjects} />
                </div>
            }   
                     
        </div>
    )
}


const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
root.render(<Popup/>)