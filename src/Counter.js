import React, { useState } from 'react';

import Display from './Display';
import ButonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

import './Counter.css';


function Counter(props) {
    const [counter, setCounter] = useState(props.initValue);
    const [showClock, setShowClock] = useState(true);
    const [stepValue, setStepValue] = useState(1);

    const handleClick = (action) => {
        switch (action) {
            case "add":
                setCounter(counter + stepValue);
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

    const handleStepChange = (event) => {
        setStepValue(Number(event.target.value))
    }

    return(
        <div className="counter">
            <Display initValue={counter} />
            <ButonsPanel click={handleClick} addStep={stepValue} />
            <Step stepValue={stepValue} stepChange={(e) => handleStepChange(e)} />
            {clockComponent}
        </div>
    )
}


export default Counter;