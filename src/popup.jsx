import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import Week from "./components/Week";


function Popup(){
    
    const [schedule,setSchedule] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    
    useEffect(()=>{
        const url ='https://mirea.xyz/api/v1.3/groups/certain?name=%D0%98%D0%92%D0%91%D0%9E-07-19'
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
            console.log(data)
            setSchedule(data[0])
            setIsLoading(false)
        }
        )
    },[])

    return(
        <div>
            <h2>{isLoading?'Loading...':schedule.groupName}</h2>
            <Week/>
            <button onClick={()=> console.log('bnt')}>test</button>
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<Popup/>)