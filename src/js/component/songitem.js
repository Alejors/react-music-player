import React from "react";

const Songitem = props => {
    return (
        <p className="m-2" onClick={() => {props.setref({ id: props.id, src: props.src}), props.setPlaying(true), props.setCurrent(props.name)}}>{props.id+1}{" "}{props.name}</p>
    )
}

export default Songitem;