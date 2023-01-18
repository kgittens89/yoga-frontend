import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';

import '../PoseDetails/PoseDetails.css';

function PoseDetails(props) {
	const [pose, setPose] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		getPoses();
		//eslint-disable-next-line
	}, [id]);

	async function getPoses() {
		const url = `https://yoga-production-8fa1.up.railway.app/flowfactory/asana/${id}`;

		try {
			const res = await fetch(url);
			const resJson = await res.json();
			setPose(resJson);
		} catch (error) {
			console.log(error);
		}
	}

	if (!pose) {
		return <p>Loading...</p>;
	}
	return (
		<div>
			<Navigation />
			<div className='whiteBk'>
				<br />
				<div className='cardContainer'>
					<h2 className='english'>{pose.englishName}</h2>
					<p className='sans'>
						Sanskrit Name: <span className='sName'>{pose.sanskritName}</span>
					</p>
					<img className='img' src={pose.image} alt={pose.englishName} />
					<div className='container'>
						<div className='details'>
							<h3 className='level'>Challenge Level: {pose.difficulty}</h3>
							<p className='description'>{pose.description}</p>
							<br />
							<div className='categoriesDisplay'>
								<h3 className='level'>Categories</h3>
								{pose.categories[0] != null && (
									<>
										<p className='catName'>{pose.categories[0].catName}</p>
										<p className='catdescription'>
											{pose.categories[0].catDescription}
										</p>
									</>
								)}
								{pose.categories[1] != null && (
									<>
										<p className='catName'>{pose.categories[1].catName}</p>
										<p className='catdescription'>
											{pose.categories[1].catDescription}
										</p>
									</>
								)}
								{pose.categories[2] != null && (
									<>
										<p className='catName'>{pose.categories[2].catName}</p>
										<p className='catdescription'>
											{pose.categories[2].catDescription}
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PoseDetails;
