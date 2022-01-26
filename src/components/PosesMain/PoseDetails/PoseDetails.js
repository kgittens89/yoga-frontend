import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
// import axios from 'axios';

import seeds from '../../../seeds.json';

function PoseDetails(props) {
	const [pose, setPose] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getPoses();
	}, [id]);

	async function getPoses() {
		try {
			const res = await fetch(
				`https://still-sands-89510.herokuapp.com/flowfactory/asana${id}`
			);
			const data = await res.json();

			setPose(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<h2>{pose.englishName}</h2>
			<img src={pose.image} alt={pose.englishName} />
			<div className='details'>
				<p>{pose.sanskritName}</p>
				<p>{pose.difficulty}</p>
				<p>{pose.discription}</p>
				<p>{pose.categories[0].catName}</p>
				<p>{pose.categories[0].catDescription}</p>
			</div>
		</div>
	);
}

export default PoseDetails;
