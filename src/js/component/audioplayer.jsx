import React, { useRef, useState } from "react";
import Songitem from "./songitem";

const fixedsongs = [
	{ "id": 1, "name": "Mario's Castle", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" },
	{ "id": 2, "name": "Mario's Star", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3" },
	{ "id": 3, "name": "Mario's Overworld", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3" },
	{ "id": 4, "name": "Zelda's Lost Woods", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/35%20-%20Lost%20Woods.mp3" },
	{ "id": 5, "name": "Zelda's Kokiri Forest", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/06%20-%20Kokiri%20Forest.mp3" },
	{ "id": 6, "name": "Zelda's Boss Battle", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/13%20-%20Boss%20Battle.mp3" },
	{ "id": 7, "name": "Zelda's Theme", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/26%20-%20Zeldas%20Theme.mp3" },
	{ "id": 8, "name": "Zelda's Temple of Time", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/44%20-%20Temple%20Of%20Time.mp3" },
	{ "id": 9, "name": "Zelda's Windmill Hut", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/57%20-%20Windmill%20Hut.mp3" },
	{ "id": 10, "name": "Final Fantasy IX's You're not Alone", "src": "https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-ix/409%20You%27re%20Not%20Alone%21.mp3" },
	{ "id": 11, "name": "Final Fantasy IX's The Place I'll Return to Someday", "src": "https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-ix/101%20The%20Place%20I%27ll%20Return%20to%20Someday.mp3" }
]

const Audioplayer = () => {
	const [songs] = useState(fixedsongs);
	let songRef = useRef(null);

	const setSongRef = ({ name, src }) => {
		songRef.current.src = src;
		songRef.current.name = name;
	}

	return (
		<>
			<ol className="list-group list-group-flush">
				{songs.length > 0 &&
					songs.map((song, i) => (
						<li key={i} className="p-0 list-group-item list-group-item-action list-group-item-dark">
							<Songitem src={song.src} name={song.name} id={song.id} setref={setSongRef} />
						</li>
					))
				}
			</ol>
			<audio ref={songRef} autoPlay></audio>
			<div className="d-flex py-1 bg-dark text-light text-center fixed-bottom">
				<div className="btn-group m-auto" role="group" aria-label="Basic example">
					<button type="button" className="btn btn-secondary">
						<i className="mx-2 fa-solid fa-backward-step"></i>
					</button>
					<button type="button" className="btn btn-secondary">
						<i className="mx-2 fa-solid fa-play"></i>
						<i className="fa-solid fa-pause"></i>
					</button>
					<button type="button" className="btn btn-secondary">
						<i className="mx-2 fa-solid fa-forward-step"></i>
					</button>
				</div>
			</div>



		</>
	);
};

export default Audioplayer;

