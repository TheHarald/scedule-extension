import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import React from "react";

function Popup(){
    console.log('popup');

    function hundle(){
        console.log('tes1');
    }
    return(
        <div>
            <h1>Popup Test</h1>
            <button onClick={hundle}>test</button>
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<Popup/>)