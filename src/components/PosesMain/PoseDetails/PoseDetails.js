import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';


function PoseDetails(props) {
	const [pose, setPose] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getPoses();
	}, [id]);

	async function getPoses() {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/asana/${id}`;

		try {
		const res = await fetch(url);
		const resJson = await res.json();
			setPose(resJson)
		} catch (error) {
			console.log(error)
		}
	};

	if (!pose) {
		return <p>Loading...</p>
	}
	return (
		<div>
			<h2>{pose.englishName}</h2>
			<img src={pose.image} alt={pose.englishName} />
			<div className='details'>
				<p>{pose.sanskritName}</p>
				<p>{pose.difficulty}</p>
				<p>{pose.description}</p>
				<p>{pose.categories[0].catName}</p>
				<p>{pose.categories[0].catDescription}</p>
			</div>
		</div>
	)
};

export default PoseDetails;
