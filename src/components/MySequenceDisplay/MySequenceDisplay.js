import axios from 'axios';
import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Sequences from './Sequences';
import '../Header/Header.css';

function MySequenceDisplay() {
	const [usersequences, setUserSequences] = useState([]);
	const [sequenceToEdit, setSequenceToEdit] = useState([]);
	const [editToggle, setEditToggle] = useState(false);
	const [currentEdit, setCurrentEdit] = useState();
	
	useEffect(() => {
		getSequences();
	}, [usersequences, setUserSequences]);

	const getSequences = () => {
		let url = 'https://still-sands-89510.herokuapp.com/flowfactory/sequence';

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setUserSequences(res);
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
				`https://still-sands-89510.herokuapp.com/flowfactory/sequence/pose/${tempArr[0]._id}/${pose._id}`
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		getSequences();
	}

	return (
		<div>
			<Navigation />
			<h1>My Sequences</h1>
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
	);
}
export default MySequenceDisplay;
