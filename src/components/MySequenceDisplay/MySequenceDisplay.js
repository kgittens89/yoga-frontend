import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import '../Header/Header.css';

function MySequenceDisplay(props) {
	const [sequences, setSequences] = useState([]);
	useEffect(() => {
		let url = 'https://still-sands-89510.herokuapp.com/flowfactory/sequence';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSequences(res);
			});
	}, []);

	return (
		<div>
			<Header />
			{sequences.map((sequence) => {
				return (
					<>
						<h4>{sequence.sequenceName}</h4>
						{sequence.sequencePoses.map((pose) => {
							return <p key={pose.id}>{pose.englishName}</p>;
						})}
					</>
				);
			})}
		</div>
	);
}

export default MySequenceDisplay;
