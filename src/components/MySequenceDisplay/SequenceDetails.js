// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function SequenceDetails(props) {
	const [sequence, setSequence] = useState(null);
	const { sequenceId } = useParams();

	useEffect(() => {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/sequence/sequenceDetails/${sequenceId}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSequence(res);
			});
		//eslint-disable-next-line
	}, []);

	if (!sequence) {
		return <p>Loading...</p>;
	}
	return (
		<div>
            <Navigation />
			<h2>{sequence.sequenceName}</h2>
			{sequence.sequencePoses.map((pose) => {
				return (
					<div className='poseList' key={pose._id}>
						<p>{pose.englishName}</p>
						<img
							src={pose.image}
							alt={pose.englishName}
							className='image-sequence'
						/>
					</div>
				);
			})}
		</div>
	);
}

export default SequenceDetails;
