import React, { useEffect, useState } from "react";
import Week from "../Week";
import { fillSemestr, fillWeek, getScheduleByDay, getWeekScheduleByDate} from "../supportingFunctions";
import DaySubjects from "../DaySubjects";
import './schedulepage.css'
import IconButton from "../Button/IconButton";
import { optionIcon } from "../icons";

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
                <div>
                    <header className="schedule-header">
                        <h2>{groupName}</h2>
                        <IconButton
                            icon={optionIcon}
                            onClick={onClose}
                        />
                    </header>
                    <Week 
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekSchedule={getWeekScheduleByDate(schedule, selectedDay)}
                    />
                    <DaySubjects subjects={getScheduleByDay(selectedDay,schedule).subjects} />            
                </div>
            }   
        </>
    );
}

export default SchedulePage;