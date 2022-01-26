import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import seeds from '../../seeds.json';

function PosesMain(props) {
	const [poses, setPoses] = useState(seeds);
	return (
		<div>
			<section className='poses-container'>
				{poses.map((pose) => {
					return (
						<Link to={`/poseDetails/${pose.id}`} key={pose.id}>
							<div className='pose-card'>
								<div className='card-image'> </div>
								<div className='card-title'></div>
							</div>
						</Link>
					);
				})}
			</section>
			PosesMain
		</div>
	);
}

export default PosesMain;
