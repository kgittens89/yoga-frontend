import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import '../Header/Header.css';
// import useNavigate from 'react-router-dom';

function MySequenceDisplay(props) {
	const [usersequences, setUserSequences] = useState([]);
	const [sequenceToEdit, setSequenceToEdit] = useState([]);
	const [editToggle, setEditToggle] = useState(false);
	const [stateToggle, setStateToggle] = useState(false);
	
	// const navigate = useNavigate();
	
	useEffect(() => {
		let url = 'https://still-sands-89510.herokuapp.com/flowfactory/sequence';
		
		fetch(url)
		.then((res) => res.json())
		.then((res) => {
			setUserSequences(res);
		});
	}, []);
	
	const handleEditClick = (sequence) => {
		// sequence.sequencePoses.forEach((pose) => {
		// 	console.log(pose)
		// }) Want to add class to each of the 'pose' elements in the forEach that will add ' on' class and display 'x' button 
		
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

		let tempArrPoses = tempArr[0].sequencePoses
			
		let idxToDelete = tempArrPoses.findIndex((temp) => {
			return temp._id === pose._id;
		});
		console.log(idxToDelete);
		
		tempArrPoses.splice(idxToDelete, 1);
		console.log(tempArr);
		
		
		axios
			.put(
				`https://still-sands-89510.herokuapp.com/flowfactory/sequence/${pose._id}`,
				tempArr
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	
	// navigate('/mySequence')
	// setSequenceToEdit(tempArr)
	// console.log(sequenceToEdit)
	
}

return (
	<div>
	<Header />
	{usersequences.map((sequence) => {
		return (
			<div className='user-sequence'>
			<h4>{sequence.sequenceName}</h4>
			{sequence.sequencePoses.map((pose) => {
				return (
					<div className='image-edit'>
					<p key={pose.id}>{pose.englishName}</p>
					
					<img src={pose.image} alt={pose.englishName} />
					{editToggle ? (
						<button onClick={() => deleteClick(pose)}>x</button>
						) : (
							''
							)}
							</div>
							);
						})}
						<button onClick={ () => handleEditClick(sequence) }>Edit</button>
						</div>
						);
					})}
					</div>
					);
				}
				
				export default MySequenceDisplay;
				