import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import Week from "./components/Week";
import Subject from "./components/Subject";


function Popup(){
    
    const [schedule,setSchedule] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(()=>{
        const url ='https://mirea.xyz/api/v1.3/groups/certain?name=%D0%98%D0%92%D0%91%D0%9E-07-19'
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
            console.log(data[0])
            setSchedule(data[0])
            setIsLoading(false)
        }
        )
    },[])

    return(
        <div className="popup">
            <h2>{isLoading?'Loading...':schedule.groupName}</h2>
            <Week/>
            <Subject
                subjectNumber={5}
                subjectTeacher={'Дергунов А.А.'}
                subjectName={'Технические средства автоматизации и управления, лаб. Г-307 (В-78)'}
                subjectType={'лаб'}
            
            />
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<Popup/>)