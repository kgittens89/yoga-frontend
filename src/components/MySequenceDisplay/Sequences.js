import React from 'react';
import { Link } from 'react-router-dom';

function SequenceDetails({
	sequence,
	index,
	currentEdit,
	editToggle,
	handleEditClick,
	deleteClick,
}) {
	return (
		<div className='user-sequence'>
			<Link to={`/sequenceDetails/${sequence._id}`}>
				{' '}
				<h4>{sequence.sequenceName}</h4>
			</Link>
			{sequence.sequencePoses.map((pose) => {
				return (
					<div className='image-edit'>
						<p key={pose.id}>{pose.englishName}</p>

						<img
							src={pose.image}
							alt={pose.englishName}
							className='image-sequence'
						/>
						{index === currentEdit && editToggle ? (
							<button onClick={() => deleteClick(pose)}>x</button>
						) : (
							''
						)}
					</div>
				);
			})}
			<button onClick={() => handleEditClick(sequence, index)}>Edit</button>
		</div>
	);
}
            
            export default SequenceDetails;