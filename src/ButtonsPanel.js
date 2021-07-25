import React from 'react';
import './ButonsPanel.css';

function ButonsPanel(props) {



    return(
        <div className="buttons-panel">
            <button onClick={() => props.click("add")}>Add 1</button>
            <button onClick={() => props.click("reinit")}>ReInit</button>
            <button onClick={() => props.click("reset")}>Reset</button>
        </div>
    )
}


export default ButonsPanel;