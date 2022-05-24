import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MySequenceDisplay.css';
import './SequenceDetails.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useCollapse from 'react-collapsed';
//https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/

function Sequences({
	sequence,
	index,
	currentEdit,
	editToggle,
	handleEditClick,
	deleteClick,
}) 
{
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	function handleDelete(){
		console.log('delete')
		const url = `https://mighty-hamlet-73625.herokuapp.com/flowfactory/sequence/${sequence._id}`;
		axios.delete(url)
	}

	return (
		<div className='userSequence'>
			<Link className='sequenceName' to={`/sequenceDetails/${sequence._id}`}>
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
								<div className='poseListEdit' key={pose.id}>
									<p className='poseListNames'>{pose.englishName}</p>
									{index === currentEdit && editToggle ? (
										<button
											className='deletePoseBtn'
											onClick={() => deleteClick(pose)}>
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
							{editToggle ? 'Save' : 'Edit'}
						</button>
						<button className='editBtn' onClick={handleDelete}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sequences;
