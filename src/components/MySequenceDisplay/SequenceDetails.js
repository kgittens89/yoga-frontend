// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../MySequenceDisplay/SequenceDetails.css'
import {AiOutlineEdit} from 'react-icons/ai'
import axios from 'axios';

function SequenceDetails(props) {
	const [editToggle, setEditToggle] = useState(false);
	const [sequence, setSequence] = useState(null);
	const { sequenceId } = useParams();
	const navigate = useNavigate();

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

	const handleDeleteSequence = () => {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/sequence/${sequenceId}`;

		axios.delete(url)
			.then(() => navigate('/mysequence'))
		.catch(err => console.log(err))
	}

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
			<div className='whiteBk'>
				<div className='sequenceDetailsHeader'>
					{editToggle ? (
						<input
							type='text'
							value={sequence.sequenceName}
							onChange={handleChange}
							className='changeNameInput'
						/>
					) : (
						<h2>{sequence.sequenceName}</h2>
					)}
					<button className='editSeqDetailsBtn' onClick={handleEditClick}><AiOutlineEdit size={25} /></button>
					{editToggle ? <button onClick={handleDeleteSequence}>Delete Sequence</button> : ''}

				</div>
				{sequence.sequencePoses.map((pose) => {
					return (
						<div className='sequenceDetailsBlock' key={pose._id}>
							<img
								src={pose.image}
								alt={pose.englishName}
								className='imageSequence'
							/>
							<div className='seqPoseNameBlock'>
								<div className='seqEnglishName'>{pose.englishName}</div>
								<div className='seqSanskritName'>{pose.sanskritName}</div>
								<p className='seqPoseDescription'>{pose.description}</p>
							</div>
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
