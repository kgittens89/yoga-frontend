import React from 'react';
import { Link } from 'react-router-dom';
import './MySequenceDisplay.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'

function SequenceDetails({
	sequence,
	index,
	currentEdit,
	editToggle,
	handleEditClick,
	deleteClick,
}) {
	return (
		<div className='userSequence'>
			<Link className='sequenceName' to={`/sequenceDetails/${sequence._id}`}>
				{' '}
				<h4>{sequence.sequenceName}</h4>
			</Link>
			{sequence.sequencePoses.map((pose) => {
				return (
					<div className='imageEdit'>
						<p key={pose.id}>{pose.englishName}</p>
						{/* <img
							src={pose.image}
							alt={pose.englishName}
							className='imageSequence'
						/> */}
						{index === currentEdit && editToggle ? (
							<button onClick={() => deleteClick(pose)}><AiOutlineCloseCircle size={20}/></button>
						) : (
							''
						)}
					</div>
				);
			})}
			<button className='editBtn' onClick={() => handleEditClick(sequence, index)}>Edit</button>
		</div>
	);
}

export default SequenceDetails;
