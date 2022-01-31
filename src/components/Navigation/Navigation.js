import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import DarkYogaGirl from '../../Assets/DarkYogaGirl.png';
import useFetchRandomPose from '../../hooks/useFetchRandomPose';
import '../Navigation/Navigation.css'
// https://react-icons.github.io/react-icons/

function Navigation(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const idForRandomPose = useFetchRandomPose();

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	return (
		<nav className='navBar'>
			<Link to='/'>
				<div className='header-box'>
					<img className='yogo-logo' src={DarkYogaGirl} alt='Logo' />
					<h1 className='header-text'>The Flow Factory</h1>
				</div>
			</Link>
			<div className='buttonDiv'>
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose
							style={{ color: '#fff', width: '40px', height: '40px ' }}
						/>
					) : (
						<FiMenu
							style={{ color: '#383838', width: '40px', height: '40px' }}
						/>
					)}
				</button>
				<ul
					style={{ display: navbarOpen ? 'flex' : 'none' }}
					className='menuNav'>
					<li>
						<Link className='navLink' to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className='navLink' to='/posesMain'>
							All Poses
						</Link>
					</li>
					<li>
						<Link className='navLink' to='/mysequence'>
							User Sequences
						</Link>
					</li>
					<li>
						<Link className='navLink' to={`/poseDetails/${idForRandomPose}`}>
							Random Pose
						</Link>
					</li>
					<li>
						<Link className='navLink' to='/about'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
