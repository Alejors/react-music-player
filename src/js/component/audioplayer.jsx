import React, { useRef, useState } from "react";
import Songitem from "./songitem";

const fixedsongs = [
	{ "id": 0, "name": "Mario's Castle", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" },
	{ "id": 1, "name": "Mario's Star", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3" },
	{ "id": 2, "name": "Mario's Overworld", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3" },
	{ "id": 3, "name": "Zelda's Lost Woods", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/35%20-%20Lost%20Woods.mp3" },
	{ "id": 4, "name": "Zelda's Kokiri Forest", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/06%20-%20Kokiri%20Forest.mp3" },
	{ "id": 5, "name": "Zelda's Boss Battle", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/13%20-%20Boss%20Battle.mp3" },
	{ "id": 6, "name": "Zelda's Theme", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/26%20-%20Zeldas%20Theme.mp3" },
	{ "id": 7, "name": "Zelda's Temple of Time", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/44%20-%20Temple%20Of%20Time.mp3" },
	{ "id": 8, "name": "Zelda's Windmill Hut", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/57%20-%20Windmill%20Hut.mp3" },
	{ "id": 9, "name": "Final Fantasy IX's You're not Alone", "src": "https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-ix/409%20You%27re%20Not%20Alone%21.mp3" },
	{ "id": 10, "name": "Final Fantasy IX's The Place I'll Return to Someday", "src": "https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-ix/101%20The%20Place%20I%27ll%20Return%20to%20Someday.mp3" }
]

const Audioplayer = () => {
	const [songs] = useState(fixedsongs);
	const [playing, setPlaying] = useState(false);
	const [current, setCurrent] = useState(null);
	let songRef = useRef(null);

	const setSongRef = ({ id, src }) => {
		songRef.current.src = src;
		songRef.current.id = id;
	}

	//CONTROLES

	let nextsong = (id) => {
		let nextid = null;

		if (id == fixedsongs.length - 1) {
			nextid = 0;
		} else {
			nextid = (parseInt(id) + 1);
		}
		setSongRef({ id: fixedsongs[nextid].id, src: fixedsongs[nextid].src });
		setCurrent(fixedsongs[nextid].name);
	}

	let prevsong = (id) => {
		let previd = null;

		if (id == 0) {
			previd = fixedsongs.length - 1;
		} else {
			previd = id - 1;
		}
		setSongRef({ id: fixedsongs[previd].id, src: fixedsongs[previd].src });
		setCurrent(fixedsongs[previd].name);
	}

	let shuffle = () => {
		let rndindex = Math.floor(Math.random() * fixedsongs.length);
		setSongRef({ id: fixedsongs[rndindex].id, src: fixedsongs[rndindex].src})
		setCurrent(fixedsongs[rndindex].name);
	}

	let music = document.querySelector(".music");
	let playorpause = () => {
		music.paused ? music.play() : music.pause();
		setPlaying(!playing);
	}

	let volumeup = () => {
		music.volume += 0.1;
	}

	let volumedown = () => {
		music.volume -= 0.1;
	}

	let loop = () => {
		!music.loop ? music.loop = true : music.loop = false;
	}

	return (
		
		<div className="container w-50">
			{ playing !== false && 
				<h1 className="mt-3 text-center">{current}</h1> 
				}
			<ol className="mt-5 list-group list-group-flush">
				{songs.length > 0 &&
					songs.map((song, i) => (
						<li key={i} className="p-0 list-group-item list-group-item-action list-group-item-dark">
							<Songitem src={song.src} name={song.name} id={song.id} setref={setSongRef} setPlaying={setPlaying} setCurrent={setCurrent} />
						</li>
					))
				}
			</ol>
			<audio ref={songRef} className="music" autoPlay></audio>
			<div className="d-flex col-md-12 py-1 bg-dark text-light text-center sticky-bottom">
				<div className="btn-group m-auto" role="group" aria-label="Basic example">
					<button onClick={() => prevsong(songRef.current.id)} type="button" className="btn btn-secondary btn-sm">
						<i className="mx-2 fa-solid fa-backward-step"></i>
					</button>
					<button onClick={() => playorpause()} type="button" className="btn btn-secondary btn-sm">
						{playing === false ?
							<i className="mx-2 fa-solid fa-play"></i> :
							<i className="fa-solid fa-pause"></i>
						}
					</button>
					<button onClick={() => nextsong(songRef.current.id)} type="button" className="btn btn-secondary btn-sm">
						<i className="mx-2 fa-solid fa-forward-step"></i>
					</button>
					<button onClick={() => loop()} type="button" className="btn btn-sm btn-secondary">
						<i className="fa-solid fa-repeat"></i>
					</button>
					<button onClick={() => shuffle()} type="button" className="btn btn-secondary btn-sm">
						<i className="fa-solid fa-shuffle"></i>
					</button>
				</div>
				<div className="btn-group m-auto" role="group" aria-label="Basic example">
					<button onClick={() => volumedown()} type="button" className="btn btn-secondary btn-sm">
						<i className="fa-solid fa-minus"></i>
					</button>
					<button className="btn btn-secondary btn-sm disabled">Volume</button>
					<button onClick={() => volumeup()} type="button" className="btn btn-secondary btn-sm">
						<i className="fa-solid fa-plus"></i>
					</button>
				</div>
			</div>
		</div>


	);
};

export default Audioplayer;

