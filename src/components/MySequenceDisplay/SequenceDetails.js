// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import '../MySequenceDisplay/SequenceDetails.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineSave } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

function SequenceDetails(props) {
	const [editToggle, setEditToggle] = useState(false);
	const [sequence, setSequence] = useState(null);
	const [sequenceName, setSequenceName] = useState();
	const { sequenceId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
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
		setEditToggle(!editToggle);
	};

	const handleChange = (e) => {
		setSequenceName(e.target.value);
	};

	const handleSave = () => {
		updateFetch({
			sequenceName: sequenceName,
		});
		navigate('/mySequence');
	};

	const handleDeleteSequence = () => {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/sequence/${sequenceId}`;

		axios
			.delete(url)
			.then(() => navigate('/mysequence'))
			.catch((err) => console.log(err));
	};

	const updateFetch = (update) => {
		axios
			.put(
				`https://still-sands-89510.herokuapp.com/flowfactory/sequence/${sequenceId}`,
				update
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		getSequence();
	};

	const deleteClick = (pose) => {
		let tempArr = [...sequence.sequencePoses];
		let idxToDelete = tempArr.findIndex((temp) => {
			return temp._id === pose._id;
		});

		tempArr.splice(idxToDelete, 1);

		const obj = {
			sequenceName: sequenceName,
			sequencePoses: tempArr,
		};
		updateFetch(obj);
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
							value={sequenceName}
							placeholder={sequence.sequenceName}
							onChange={handleChange}
							className='changeNameInput'
						/>
					) : (
						<h2>{sequence.sequenceName}</h2>
					)}
					<div className='sequenceBtns'>
						<button className='editSeqBtn' onClick={handleEditClick}>
							<AiOutlineEdit size={25} />
						</button>

						{editToggle ? (
							<button className='editSeqBtn' onClick={handleSave}>
								<AiOutlineSave size={25} />
							</button>
						) : (
							''
						)}
						{editToggle ? (
							<button className='editSeqBtn' onClick={handleDeleteSequence}>
								<BsTrash size={25} />
							</button>
						) : (
							''
						)}
					</div>
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
								<button
									className='deletePoseBtnSeq'
									onClick={() => deleteClick(pose)}>
									<TiDeleteOutline size={40} />
								</button>
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
