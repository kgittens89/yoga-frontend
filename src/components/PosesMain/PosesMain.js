import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MySequenceNav from '../MySequenceNav/MySequenceNav';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import PoseByCategory from './PoseByCategory/PoseByCategory';
import Navigation from '../Navigation/Navigation';

function PosesMain(props) {
	const [poses, setPoses] = useState([]);
	const [sequencePose, setSequencePose] = useState([]);

	useEffect(() => {
		getAsana();
	}, []);

	const handleClick = (pose) => {
		setSequencePose([...sequencePose, pose]);
	};

	async function getAsana() {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/asana`;
		const res = await fetch(url);
		const resJson = await res.json();
		setPoses(resJson);
	}

	if (!poses) {
		return <p> Loading...</p>;
	}
	return (
		<div>
			<Navigation />
			<h1>All Poses</h1>
			<PoseByCategory />
			<div className='main-poses'>
				<MySequenceNav sequencePose={sequencePose} setSequencePose={setSequencePose} />
				<section className='posesContainer'>
					{poses.map((pose) => {
						return (
							<div className='poseCard'>
								<Link to={`/poseDetails/${pose._id}`} key={pose.id}>
									<div className='cardImage'>
										<img src={pose.image} alt={pose.englishName} />
									</div>
								</Link>
								<div className='cardTitle'>
									<h3 className='poseName'>{pose.englishName}</h3>
									<button
										className='addPoseBtn'
										onClick={() => handleClick(pose)}>
										<AiOutlinePlusCircle size={35} className='addBtn' />
									</button>
								</div>
							</div>
						);
					})}
					;
				</section>
			</div>
		</div>
	);
}

export default PosesMain;
