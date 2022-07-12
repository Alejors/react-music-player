import React from "react";

const Slider = (props) => {
    if(props.playing !== false){
    return (
        <>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{ width: `${props.position}%` }}/>
            </div>
        </>
    )}else{
        return(null)
    }
}

export default Slider;