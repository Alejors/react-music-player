import React, {useRef, useState} from "react";

const Songitem = props => {
    return (
        <p className="m-2" onClick={() => props.setref({ name: props.name, src: props.src })}>{props.id}{" "}{props.name}</p>
    )
}

export default Songitem;