import React from 'react';


import './Display.css';


function Display(props) {



    return(
        <div className="display">
            <h2>Licznik: <span className={props.initValue >= 8 ? "span-special" : "span-default"}>{props.initValue}</span></h2>
        </div>
    )
}


export default Display;