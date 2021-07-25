import React, { useState } from 'react';

import './Step.css'


function Step(props) {


    
    return(
        <div>
            Krok:
            <input className="step-input" 
                type='number' 
                value={props.stepValue} 
                onChange={(e) => props.stepChange(e)}>
            </input>
        </div>
    )
}

export default Step;