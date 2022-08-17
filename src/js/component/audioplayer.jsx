import React, { useRef, useState, useEffect } from "react";
import Songitem from "./songitem";
import Footer from "./footer";
import Header from "./header";
import Slider from "./slider";

// const fixedsongs = [
// 	{ "id": 0, "name": "Mario's Castle", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3" },
// 	{ "id": 1, "name": "Mario's Star", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3" },
// 	{ "id": 2, "name": "Mario's Overworld", "src": "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3" },
// 	{ "id": 3, "name": "Zelda's Lost Woods", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/35%20-%20Lost%20Woods.mp3" },
// 	{ "id": 4, "name": "Zelda's Kokiri Forest", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/06%20-%20Kokiri%20Forest.mp3" },
// 	{ "id": 5, "name": "Zelda's Boss Battle", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/13%20-%20Boss%20Battle.mp3" },
// 	{ "id": 6, "name": "Zelda's Theme", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/26%20-%20Zeldas%20Theme.mp3" },
// 	{ "id": 7, "name": "Zelda's Temple of Time", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/44%20-%20Temple%20Of%20Time.mp3" },
// 	{ "id": 8, "name": "Zelda's Windmill Hut", "src": "https://zeldauniverse.s3.amazonaws.com/soundtracks/ocarinaoftimeost/57%20-%20Windmill%20Hut.mp3" },
// 	{ "id": 9, "name": "Final Fantasy IX's You're not Alone", "src": "https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-ix/409%20You%27re%20Not%20Alone%21.mp3" },
// 	{ "id": 10, "name": "Final Fantasy IX's The Place I'll Return to Someday", "src": "https://fi.zophar.net/soundfiles/playstation-psf/final-fantasy-ix/101%20The%20Place%20I%27ll%20Return%20to%20Someday.mp3" }
// ]

const Audioplayer = () => {
	const [songs, setSongs] = useState(null);
	const [playing, setPlaying] = useState(false);
	const [current, setCurrent] = useState(null);
	const [totaltime, setTotaltime] = useState(null);
	const [elapsedtime, setElapsedtime] = useState(null);
	let songRef = useRef(null);

	const setSongRef = ({ id, src }) => {
		songRef.current.src = src;
		songRef.current.id = id;
	}

	//CAPTURA DE DATOS
	useEffect(() => {
		fetch('https://assets.breatheco.de/apis/sound/songs')
			.then(response => { return response.json() })
			.then(data => { setSongs(data) })
			.catch(error => console.log(error))
	}, [])

	let position = Math.floor(elapsedtime/totaltime*100);

	//CONTROLES

	let nextsong = (url) => {
		let nextid = null;

		let id = songs.findIndex((ele) => ele.url.includes(url));


		if (id === songs.length - 1) {
			nextid = 0;
		} else {
			nextid = (id + 1);
		}
		setSongRef({ id: songs[nextid].url, src: `https://assets.breatheco.de/apis/sound/${songs[nextid].url}` });
		setCurrent(songs[nextid].name);
		!playing && setPlaying(!playing);
	}

	let prevsong = (url) => {
		let previd = null;

		let id = songs.findIndex((ele) => ele.url.includes(url));
		if (id == 0) {
			previd = songs.length - 1;
		} else {
			previd = id - 1;
		}
		setSongRef({ id: songs[previd].url, src: `https://assets.breatheco.de/apis/sound/${songs[previd].url}` });
		setCurrent(songs[previd].name);
		!playing && setPlaying(!playing);
	}

	let shuffle = () => {
		let rndindex = Math.floor(Math.random() * songs.length);
		setSongRef({ id: songs[rndindex].url, src: `https://assets.breatheco.de/apis/sound/${songs[rndindex].url}` })
		setCurrent(songs[rndindex].name);
		!playing && setPlaying(!playing);
	}

	let playorpause = () => {
		if (current !== null) {
			songRef.current.paused ? songRef.current.play() : songRef.current.pause();
			setPlaying(!playing);
		} else {
			window.alert('Pick a song first!')
		}
	}

	let volumeup = () => {
		songRef.current.volume += 0.1;
	}

	let volumedown = () => {
		songRef.current.volume -= 0.1;
	}

	let loop = () => {
		!songRef.current.loop ? songRef.current.loop = true : songRef.current.loop = false;
	}

	return (

		<div className="container w-50">
			<div className="sticky-top">
				<Header current={current} playing={playing} />
				<Slider position={position} playing={playing} />
			</div>
			{/* SONGS LISTING */}
			<ol className="mt-3 list-group list-group-flush">
				{!!songs &&
					songs.length > 0 &&
					songs.map((song, i) => (
						<li key={i} className="p-0 list-group-item list-group-item-action list-group-item-dark">
							<Songitem src={song.url} name={song.name} id={song.id} setref={setSongRef} setPlaying={setPlaying} setCurrent={setCurrent} />
						</li>
					))
				}
			</ol>

			{/* AUDIO TAG */}
			<audio ref={songRef} className="music" onEnded={() => nextsong(songRef.current.id)} onLoadedMetadata={() => setTotaltime(songRef.current.duration)} onTimeUpdate={() => setElapsedtime(songRef.current.currentTime)} autoPlay></audio>
			<Footer playing={playing} songRef={songRef} nextsong={nextsong} prevsong={prevsong} shuffle={shuffle} playorpause={playorpause} volumeup={volumeup} volumedown={volumedown} loop={loop} />
		</div>


	);
};

export default Audioplayer;

