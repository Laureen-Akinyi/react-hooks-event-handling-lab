// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function burnsFocus(){
        console.log("Good!");
    }

    function burnsBlur(){
        console.log("Hey! Eyes on me!");
    }

    return(
        <button onFocus={burnsFocus} onBlur={burnsBlur}>Eyes on me</button>
    );
}

export default EyesOnMe;