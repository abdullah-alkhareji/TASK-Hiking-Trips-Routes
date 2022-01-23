import React, { useState } from "react";
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";

function TripsList() {
	const [query, setQuery] = useState("");
	let trips = tripsData
		.filter(trip => trip.name.toLowerCase().includes(query.toLowerCase()))
		.map(trip => <TripItem trip={trip} />);

	const handleDifficulty = e => {
		trips = trips.filter(trip => trip.difficulty === e);
	};

	return (
		<section class='page-section portfolio mt-5' id='portfolio'>
			<div class='container'>
				<h2 class='page-section-heading text-center text-uppercase text-secondary mb-0'>
					Explore Trips
				</h2>
				<br />
				<SearchBar setQuery={setQuery} />
				<center>
					<button
						onClick={e => handleDifficulty(e.target.value)}
						value='easy'
						className='btn btn-primary btn-xl'>
						Easy
					</button>
					<button className='btn btn-primary btn-xl'>Moderate</button>
					<button className='btn btn-primary btn-xl'>Hard</button>
				</center>
				<div class='divider-custom'>
					<div class='divider-custom-line'></div>
					<div class='divider-custom-icon'>
						<i class='fas fa-star'></i>
					</div>
					<div class='divider-custom-line'></div>
				</div>

				<div class='row justify-content-center'>{trips}</div>
			</div>
		</section>
	);
}

export default TripsList;
