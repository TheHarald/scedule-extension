import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import Week from "./components/Week";
import Subject from "./components/Subject";
import { fillWeek, isToday } from "./components/supportingFunctions";
import DaySubjects from "./components/DaySubjects";


function Popup(){

    
    const [schedule,setSchedule] = useState({})
    const [testScedule,setTestScedule] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    let semester = []
    let startDay = new Date('September 1, 2022');
    for( let i = 0; i<17;i++){
        semester.push(fillWeek(startDay.addDays(i*7)))
    }

    function fillSemestr(semester,weekSchedule){
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
        // console.log(schedule);
    },[schedule])


    const test = [
        [],
        [
            {
                "weeks": null,
                "name": "Цифровые системы управления",
                "type": "ЛБ",
                "tutor": "Арбузов В.Н.",
                "place": "Г-403 (В-78)",
                "link": null
            }
        ],
        [
            {
                "weeks": null,
                "name": "Дизайн интерфейсов систем управления",
                "type": "П",
                "tutor": "Белова К.И.",
                "place": "И-204-б (В-78)",
                "link": null
            }
        ],
        [
            {
                "weeks": null,
                "name": "Разработка информационно-управляющих систем",
                "type": "ЛБ",
                "tutor": "Огорельцев Р.М.",
                "place": "лаб. Г-307-1 (В-78)",
                "link": null
            },
            {
                "weeks": null,
                "name": "Технические средства автоматизации и управления",
                "type": "ЛБ",
                "tutor": "Огорельцев Р.М.",
                "place": "лаб. Г-307 (В-78)",
                "link": null
            }
        ],
        [
            {
                "weeks": null,
                "name": "Разработка информационно-управляющих систем",
                "type": "ЛБ",
                "tutor": null,
                "place": "лаб. Г-307-1 (В-78)",
                "link": null
            }
        ],
        [
            {
                "weeks": null,
                "name": "Управление информационно-технологическими проектами",
                "type": "Л",
                "tutor": "Панов А.В.",
                "place": "А-10 (В-78)",
                "link": null
            }
        ]
    ]


    

    
    return(
        <div className="popup">
            {isLoading?
                <h2>Loading...</h2>
                :
                <div>
                    <h2>{schedule.groupName}</h2>
                    <Week/>
                    <DaySubjects subjects={test} />
                    {/* <DaySubjects subjects={test}/> */}
                    {/* {
                        testScedule.map( week => {
                            week.map( day=>{
                                if(isToday(day.day)){
                                    console.log(day.subjects);
                                    // TODO
                                    // return (<DaySubjects
                                    //     subjects={day.subjects}
                                    // />)

                                    day.subjects.map( (subject,index) =>{
                                       return(<Subject
                                            subjectName={subject.name}
                                            subjectNumber={index+1}
                                            subjectTeacher={subject.tutor}
                                            subjectType={subject.type}
                                        />
                                       )
                                    })
                                }
                            })
                        })
                    } */}
                </div>
            }   
            
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<Popup/>)