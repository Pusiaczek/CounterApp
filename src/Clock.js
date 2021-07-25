import React, { useState, useEffect } from 'react';

import './Clock.css';


function Clock(props) {
    const [date, setDate] = useState(new Date());


    const tick = () => setDate(new Date());
    
    useEffect(() => {
        let timerID = setInterval(
            () => {tick()}, 1000
        )

        return(() => {
            clearInterval(timerID)
        })
    })


    return(
        <h2 className="clock" onClick={() => props.toggleClock()} >{date.toLocaleTimeString()}</h2>
    )
}

export default Clock;