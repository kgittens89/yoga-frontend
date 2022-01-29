import React from 'react';
import { Link } from 'react-router-dom';
import './MySequenceDisplay.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useCollapse from 'react-collapsed';

function SequenceDetails({
	sequence,
	index,
	currentEdit,
	editToggle,
	handleEditClick,
	deleteClick,
}) 
{
		const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<div className='userSequence'>
			<Link className='sequenceName' to={`/sequenceDetails/${sequence._id}`}>
				{' '}
				<h4>{sequence.sequenceName}</h4>
			</Link>
			<div className='collapsible'>
				<div className='collapsibleHeader' {...getToggleProps()}>
					{isExpanded ? 'Hide Poses' : 'See Poses'}
				</div>
				<div {...getCollapseProps()}>
					<div className='content'>
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
										<button onClick={() => deleteClick(pose)}>
											<AiOutlineCloseCircle size={20} />
										</button>
									) : (
										''
									)}
								</div>
							);
						})}
						<button
							className='editBtn'
							onClick={() => handleEditClick(sequence, index)}>
							Edit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SequenceDetails;
