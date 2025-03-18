import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';

import '../PoseDetails/PoseDetails.css';

const styles = {
	loadAnimation: {
		width: '100%',
		height: '100vh',
		display: 'block',
		margin: 'auto',
	},
};

function PoseDetails(props) {
	const [pose, setPose] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		getPoses();
		//eslint-disable-next-line
	}, [id]);

	async function getPoses() {
		const url = `https://mighty-hamlet-73625.herokuapp.com/flowfactory/asana/${id}`;

		try {
			const res = await fetch(url);
			const resJson = await res.json();
			setPose(resJson);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
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
			)}
		</div>
	);
}

export default PoseDetails;
