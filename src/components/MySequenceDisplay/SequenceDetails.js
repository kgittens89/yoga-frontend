// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../MySequenceDisplay/SequenceDetails.css'

function SequenceDetails(props) {
	const [editToggle, setEditToggle] = useState(false);
	const [sequence, setSequence] = useState(null);
	const { sequenceId } = useParams();

	useEffect(() => {
		// const url = `https://still-sands-89510.herokuapp.com/flowfactory/sequence/sequenceDetails/${sequenceId}`;

		// fetch(url)
		// .then((res) => res.json())
		// .then((res) => {
		//     setSequence(res);
		// });
		getSequence();
		//eslint-disable-next-line
	}, [sequence]);

	const getSequence = () => {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/sequence/sequenceDetails/${sequenceId}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSequence(res);
			});
	};

	const handleEditClick = () => {
		let tempSeq = { ...sequence };
		console.log(tempSeq);
		setEditToggle(!editToggle);
	};

	const handleChange = (e) => {
		setSequence({ ...sequence, sequenceName: e.target.value });
	};

	const deleteClick = (pose) => {
		console.log(pose);
		let tempArr = [...sequence.sequencePoses];
		console.log(tempArr);
		// let tempArrPoses = tempArr[0].sequencePoses;

		let idxToDelete = tempArr.findIndex((temp) => {
			return temp._id === pose._id;
		});
		console.log(idxToDelete);
		tempArr.splice(idxToDelete, 1);
		console.log(tempArr);
		// axios
		// 	.put(
		// 		`https://still-sands-89510.herokuapp.com/flowfactory/sequence/pose/${tempArr[0]._id}/${pose._id}`
		// 	)
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
		// getSequences();
	};

	if (!sequence) {
		return <p>Loading...</p>;
	}
	return (
		<div>
            <Navigation />
			<div>
				{editToggle ? (
					<input
						type='text'
						value={sequence.sequenceName}
						onChange={handleChange}
					/>
				) : (
					<h2>{sequence.sequenceName}</h2>
				)}
				<button onClick={handleEditClick}>Edit</button>
				{sequence.sequencePoses.map((pose) => {
					return (
						<div className='sequenceDetailsBlock' key={pose._id}>
							<img
								src={pose.image}
								alt={pose.englishName}
								className='imageSequence'
							/>
							<p>{pose.englishName}</p>
                            <span>{pose.description}</span>
							{editToggle ? (
								<button onClick={() => deleteClick(pose)}>x</button>
							) : (
								''
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SequenceDetails;
