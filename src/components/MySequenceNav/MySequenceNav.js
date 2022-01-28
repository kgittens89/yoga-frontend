import React from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function MySequenceNav({ sequencePose, setSequencePose }) {
	// const navigate = useNavigate();

	const handleSaveClick = () => {
		const sequenceObj = sequencePose.map((pose) => {
			return {
				englishName: pose.englishName,
				image: pose.image,
			};
		});

		const obj = {
			sequenceName: 'User Sequence',
			sequencePoses: sequenceObj,
		};

		const url = 'https://still-sands-89510.herokuapp.com/flowfactory/sequence';

        axios.post(url, obj).then((err) => console.log(err));
		setSequencePose([])
		// navigate('/mySequence');
	};

	return (
		<>
			<div className='sequenceNavGrid'>
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
				<button className='saveSequence' onClick={handleSaveClick}>Save Sequence</button>
			</div>
		</>
	);
}

export default MySequenceNav;
