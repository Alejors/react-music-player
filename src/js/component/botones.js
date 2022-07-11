import React from "react";

const Footer = props => {
    return (
        <div className="d-flex col-md-12 py-1 bg-dark text-light text-center sticky-bottom">
            <div className="btn-group m-auto" role="group" aria-label="Basic example">
                <button onClick={() => props.prevsong(props.songRef.current.id)} type="button" className="btn btn-secondary btn-sm">
                    <i className="mx-2 fa-solid fa-backward-step"></i>
                </button>
                <button onClick={() => props.playorpause()} type="button" className="btn btn-secondary btn-sm">
                    {props.playing === false ?
                        <i className="mx-2 fa-solid fa-play"></i> :
                        <i className="fa-solid fa-pause"></i>
                    }
                </button>
                <button onClick={() => props.nextsong(props.songRef.current.id)} type="button" className="btn btn-secondary btn-sm">
                    <i className="mx-2 fa-solid fa-forward-step"></i>
                </button>
                <button onClick={() => props.loop()} type="button" className="btn btn-sm btn-secondary">
                    <i className="fa-solid fa-repeat"></i>
                </button>
                <button onClick={() => props.shuffle()} type="button" className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-shuffle"></i>
                </button>
            </div>
            <div className="btn-group m-auto" role="group" aria-label="Basic example">
                <button onClick={() => props.volumedown()} type="button" className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-minus"></i>
                </button>
                <button className="btn btn-secondary btn-sm disabled">Volume</button>
                <button onClick={() => props.volumeup()} type="button" className="btn btn-secondary btn-sm">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default Footer;