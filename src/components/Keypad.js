// Code Keypad Component Here
import React from "react";


function Keypad(){
    function nuclearChange(){
        console.log('Entering password...')
    }

    return (
            <input type="password" onChange={nuclearChange} />
        
    )
}

export default Keypad;