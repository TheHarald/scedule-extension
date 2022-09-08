import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Modal from './components/Modal/Modal';



function Popup(){

    const [currentPage, setCurrentPage] = useState('Modal')

    let modal = <Modal onClose={()=> setCurrentPage('SchedulePage')} />
    let schedulePage = <SchedulePage onClose={()=> setCurrentPage('Modal')} />


    useEffect(()=>{
        chrome.storage.local.get(['schedule'], function(result) {
            if(result){
                setCurrentPage('SchedulePage')
            }
         });
    },[])

    let page = modal

    switch (currentPage) {
        case 'Modal':
                page = modal
            break;
        case 'SchedulePage':
                page = schedulePage
            break;
    
        default:
            page = modal
            break;
    }

    return(
        <div className="popup">
              {page}
        </div>
    )
}


const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
root.render(<Popup/>)