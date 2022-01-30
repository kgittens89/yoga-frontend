import React from 'react';
import { Link } from 'react-router-dom';
import './MySequenceDisplay.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useCollapse from 'react-collapsed';
//https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/

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
					{isExpanded ? 'Hide Pose List' : 'Show Pose List'}
				</div>
				<div {...getCollapseProps()}>
					<div className='content'>
						{sequence.sequencePoses.map((pose) => {
							return (
								<div className='poseListEdit'>
									<p key={pose.id} className='poseListNames'>{pose.englishName}</p>
									{index === currentEdit && editToggle ? (
										<button className='deletePoseBtn' onClick={() => deleteClick(pose)}>
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
