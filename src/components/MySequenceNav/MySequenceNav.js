import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MySequenceNav({ sequencePose, setSequencePose }) {
	const navigate = useNavigate();
	const [sequenceName, setSequenceName] = useState();

	const handleSaveClick = () => {
		const sequenceObj = sequencePose.map((pose) => {
			return {
				englishName: pose.englishName,
				sanskritName: pose.sanskritName,
				image: pose.image,
				description: pose.description
			};
		});

		const obj = {
			sequenceName: (sequenceName ? `${sequenceName}` : 'User Sequence'),
			sequencePoses: sequenceObj,
		};

		const url =
			'https://mighty-hamlet-73625.herokuapp.com/flowfactory/sequence';

		axios.post(url, obj)
			.then((err) => console.log(err));
		setSequencePose([])
		navigate('/mysequence');
		// Try to add logic to navigate to new sequenceDetails page. Was considering grabbing the res._id from return. I believe that the backend is returning the newly created sequence when posted ??
	};

	const handleChange = (e) => {
		setSequenceName(e.target.value)
	}

	return (
		<>
			<div className='sequenceNavGrid'>
				{sequencePose.length >= 1 ? <input
					type='text'
					placeholder='Sequence Name'
					value={sequenceName}
					onChange={handleChange}
					className='nameInput'
				/> : ''}
				{sequencePose.map((pose) => {
					return (
						<div className='sequenceNavCard'>
							<div>
								<p className='sequencePoseName' id={pose._id}>{pose.englishName}</p>
								<img
									className='sequenceNavImg'
									src={pose.image}
									alt={pose.englishName}
								/>
							</div>
						</div>
					);
				})}
				{sequencePose.length >= 1 ? <button className='saveSequence' onClick={handleSaveClick}>Save Sequence</button> : <div className='preSequence'>Click the + next to any pose to start your sequence!</div>}
				
			</div>
		</>
	);
}

export default MySequenceNav;
