import React, { useEffect, useState } from "react";
import { fillSemestr, fillWeek, getScheduleByDay, getWeekScheduleByDate} from "../supportingFunctions";
import DaySubjects from "../DaySubjects";
import './schedulepage.css'
import Header from "../Header/Header";
import Week from "../Week/Week";

function SchedulePage({onClose}) {

    const [groupName,setGroupName] = useState('')
    const [schedule,setSchedule] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const [selectedDay,setSelectedDay] = useState(new Date())

    let semester = []
    let startDay = new Date('September 1, 2022');
    for( let i = 0; i<17;i++){
        semester.push(fillWeek(startDay.addDays(i*7)))
    }

    useEffect(()=>{
        chrome.storage.local.get(['schedule'], function(result) {
            setGroupName(result.schedule.groupName)
            fillSemestr(semester,result.schedule.schedule)
            setSchedule(semester)
            setIsLoading(false)
        });
    },[])

    return (
        <>
            {isLoading?
                <h2>Loading...</h2>
                :
                <div className='schedule-page__conatiner'>
                    <Header
                        groupName={groupName}
                        onOptionClick={onClose}
                        weekNumber={getWeekScheduleByDate(schedule, selectedDay).weekNumber}
                    />
                    <Week 
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekSchedule={getWeekScheduleByDate(schedule, selectedDay).weekSchedule}
                        weekNumber={getWeekScheduleByDate(schedule, selectedDay).weekNumber}
                    />
                    <DaySubjects 
                        subjects={getScheduleByDay(selectedDay,schedule).subjects} 
                        weekNumber={getWeekScheduleByDate(schedule, selectedDay).weekNumber}
                    />            
                </div>
            }   
        </>
    );
}

export default SchedulePage;