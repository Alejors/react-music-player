import React from "react";

const Header = props => {
    return (
        <>
        {props.playing !== false &&
            <h1 className="mt-3 text-center sticky-top bg-light bg-opacity-50">{props.current}</h1>
        }
        </>
    )
}

export default Header;