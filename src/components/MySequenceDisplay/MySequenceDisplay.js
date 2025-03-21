import axios from 'axios';
import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Sequences from './Sequences';

const styles = {
	loadAnimation: {
		width: '100%',
		height: '100vh',
		display: 'block',
		margin: 'auto',
	},
};

function MySequenceDisplay() {
	const [usersequences, setUserSequences] = useState([]);
	const [sequenceToEdit, setSequenceToEdit] = useState([]);
	const [editToggle, setEditToggle] = useState(false);
	const [currentEdit, setCurrentEdit] = useState();
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		getSequences();
	}, [usersequences]);

	const getSequences = () => {
		let url = 'https://mighty-hamlet-73625.herokuapp.com/flowfactory/sequence';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setUserSequences(res);
				setLoading(false);
			});
	};

	const handleEditClick = (sequence, index) => {
		setCurrentEdit(index)
		setSequenceToEdit([])
		setSequenceToEdit([sequence])
		setEditToggle(!editToggle)
	}
	
	const deleteClick = (pose) => {
		let tempArr = [...sequenceToEdit];
		let tempArrPoses = tempArr[0].sequencePoses
			
		let idxToDelete = tempArrPoses.findIndex((temp) => {
			return temp._id === pose._id;
		});
		
		tempArrPoses.splice(idxToDelete, 1);
		
		axios
			.put(
				`https://mighty-hamlet-73625.herokuapp.com/flowfactory/sequence/pose/${tempArr[0]._id}/${pose._id}`
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		getSequences();
	}

	return (
		<div>
			<Navigation />
			{loading ? (
				<iframe
					title='Loading Animation'
					src='https://lottie.host/embed/f0e2e9ee-9d7f-4a44-94fc-bc2f830df55d/QFssBfu3ds.lottie'
					style={styles.loadAnimation}></iframe>
			) : (
				<div className='whiteBk'>
					<h1 className='pageTitle'>User Sequences</h1>
					<div className='sequenceContainer'>
						{usersequences.map((sequence, index) => {
							return (
								<Sequences
									sequence={sequence}
									index={index}
									currentEdit={currentEdit}
									editToggle={editToggle}
									handleEditClick={handleEditClick}
									deleteClick={deleteClick}
									key={index}
								/>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
export default MySequenceDisplay;
