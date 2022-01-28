import axios from 'axios';
import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Sequences from './Sequences';
import '../Header/Header.css';
// import useNavigate from 'react-router-dom';

function MySequenceDisplay() {
	const [usersequences, setUserSequences] = useState([]);
	const [sequenceToEdit, setSequenceToEdit] = useState([]);
	const [editToggle, setEditToggle] = useState(false);
	// const [stateToggle, setStateToggle] = useState(false);
	const [currentEdit, setCurrentEdit] = useState();
	// const navigate = useNavigate();
	
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
	}
	
	const handleEditClick = (sequence, index) => {
		// sequence.sequencePoses.forEach((pose) => {
		// 	console.log(pose)
		// }) Want to add class to each of the 'pose' elements in the forEach that will add ' on' class and display 'x' button 
		console.log(index)
		setCurrentEdit(index)
		setSequenceToEdit([])
		setSequenceToEdit([sequence])
		setEditToggle(!editToggle)
	}
	
	const deleteClick = (pose) => {
		// pose.classList.add('on')
		// let tempArr = [...sequenceToEdit[0].sequencePoses]
		// let idxToDelete = tempArr.findIndex((temp) => {
		// 	return temp._id === pose._id
		// })
		// console.log(idxToDelete)
		
		// tempArr.splice(idxToDelete, 1)
		// console.log(tempArr)
		
		let tempArr = [...sequenceToEdit];
		console.log(tempArr)

		let tempArrPoses = tempArr[0].sequencePoses
			
		let idxToDelete = tempArrPoses.findIndex((temp) => {
			return temp._id === pose._id;
		});
		console.log(idxToDelete);
		
		tempArrPoses.splice(idxToDelete, 1);
		console.log(tempArr);
		console.log(pose._id)
		
		axios
			.put(
				`https://still-sands-89510.herokuapp.com/flowfactory/sequence/pose/${tempArr[0]._id}/${pose._id}`
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		getSequences();
	
		// navigate('/mySequence')
		// setSequenceToEdit(tempArr)
		// console.log(sequenceToEdit)
	
	}

	return (
		<div>
			<Navigation />
			{usersequences.map((sequence, index) => {
				return (
				<Sequences
					sequence={sequence}
					index={index}
					currentEdit={currentEdit}
					editToggle={editToggle}
					handleEditClick={handleEditClick}
					deleteClick={deleteClick}
					/>
				)
			})}
			</div>
	)
}
				export default MySequenceDisplay;
				