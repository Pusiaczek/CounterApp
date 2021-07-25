import React, { useState } from 'react';

import Display from './Display';
import ButonsPanel from './ButtonsPanel';
import Clock from './Clock';

import './Counter.css';


function Counter(props) {
    const [counter, setCounter] = useState(props.initValue);
    const [showClock, setShowClock] = useState(true);

    const handleClick = (action) => {
        switch (action) {
            case "add":
                setCounter(counter + 1);
                break;

            case "reinit":
                setCounter(props.initValue);
                break;

            case "reset":
                setCounter(0);
                break;

            default:
                break;
        }
    }


    const handleToggleClock = () => {
        setShowClock(!showClock);
    }

    let clockComponent; 
    // czy to jest dobra praktyka inicjalizowac w ten sposob?
    if( showClock ) {
        clockComponent = <Clock toggleClock={handleToggleClock} />
    }else{
        clockComponent = <h2 className='clock clock-hidden' onClick={handleToggleClock}>Show clock</h2>
    }

    

    return(
        <div className="counter">
            <Display initValue={counter} />
            <ButonsPanel click={handleClick} />
            {clockComponent}
        </div>
    )
}


export default Counter;