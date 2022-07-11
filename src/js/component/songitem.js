import React from "react";

const Songitem = props => {
    return (
        <p className="m-2" onClick={() => {props.setref({ id: props.src, src:`https://assets.breatheco.de/apis/sound/${props.src}`}), props.setPlaying(true), props.setCurrent(props.name)}}>{props.id}{" "}{props.name}</p>
    )
}

export default Songitem;

