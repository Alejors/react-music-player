import React from "react";

const Header = props => {
    return (
        <>
        {props.playing !== false &&
            <h1 className="mt-3 text-center">{props.current}</h1>
        }
        </>
    )
}

export default Header;