import React, { useEffect, useState } from "react";
import Week from "../Week";
import { fillSemestr, fillWeek, getScheduleByDay, getWeekScheduleByDate} from "../supportingFunctions";
import DaySubjects from "../DaySubjects";
import Notification from "../Notification";
import './schedulepage.css'
import OptionButton from "../Button/OptionButton";
import { getData } from "../../hooks/useStorage";

function SchedulePage({onClose}) {

    const [schedule,setSchedule] = useState({})
    const [testScedule,setTestScedule] = useState([]) // refactor
    const [isLoading,setIsLoading] = useState(true)

    const [selectedDay,setSelectedDay] = useState(new Date())

    let semester = []
    let startDay = new Date('September 1, 2022');
    for( let i = 0; i<17;i++){
        semester.push(fillWeek(startDay.addDays(i*7)))
    }

    useEffect(()=>{

        // console.log('getdata-> ',getData('schedule'));

        chrome.storage.local.get(['schedule'], function(result) {
            console.log('Value currently is ' + JSON.stringify(result.schedule)); //result.schedule = data[0]
            setSchedule(result.schedule)
            fillSemestr(semester,result.schedule.schedule)
            setTestScedule(semester)
            setIsLoading(false)
        });

        // const url ='https://mirea.xyz/api/v1.3/groups/certain?name=%D0%98%D0%92%D0%91%D0%9E-07-19'
        // fetch(url).then(
        //     response => response.json()
        // ).then(
        //     data => {
        //     setSchedule(data[0])
        //     fillSemestr(semester,data[0].schedule)
        //     setTestScedule(semester)
        //     setIsLoading(false)
        // })

    },[])

    return (
        <>
            {isLoading?
                <h2>Loading...</h2>
                :
                <div>
                    <header className="schedule-header">
                        <h2>{schedule.groupName}</h2>
                        <OptionButton  onClick={onClose}/>
                    </header>
                    <Week 
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekSchedule={getWeekScheduleByDate(testScedule, selectedDay)}
                    />
                    <DaySubjects subjects={getScheduleByDay(selectedDay,testScedule).subjects} />            
                </div>
            }   
        </>
    );
}

export default SchedulePage;