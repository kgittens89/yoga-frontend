import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MySequenceNav from '../MySequenceNav/MySequenceNav';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsBookmarkHeart } from 'react-icons/bs';

import Navigation from '../Navigation/Navigation';
import '../PosesMain/PosesMain.css';

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
		const url = `https://yoga-production-8fa1.up.railway.app/flowfactory/asana`;
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
			<div className='whiteBk'>
				<h1 className='pageTitle'>All Poses</h1>
				<p className='posesMainHowTo'>
					Hello fellow yogis! Below you'll find an extensive list of asanas to
					help you create your perfect sequence. Once you're done creating, don't forget
					to save <BsBookmarkHeart size={19} />
				</p>
				<div className='main-poses'>
					<MySequenceNav
						sequencePose={sequencePose}
						setSequencePose={setSequencePose}
					/>
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
											<AiOutlinePlusCircle size={35} />
										</button>
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</div>
		</div>
	);
}

export default PosesMain;
