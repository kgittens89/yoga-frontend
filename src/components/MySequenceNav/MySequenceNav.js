import React from 'react';
import axios from 'axios';

function MySequenceNav({ sequencePose, setSequencePose }) {
	const handleClick = () => {
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
				<button className='saveSequence' onClick={handleClick}>Save Sequence</button>
			</div>
		</>
	);
}

export default MySequenceNav;
