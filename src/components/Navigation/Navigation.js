import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import DarkYogaGirl from '../../Assets/DarkYogaGirl.png'
import useFetchRandomPose from '../../hooks/useFetchRandomPose';
// https://react-icons.github.io/react-icons/

function Navigation(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);
	  const idForRandomPose = useFetchRandomPose();

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<nav className='navBar'>
			<div className='header-box'>
				<h1 className='header-text'>The Flow Factory</h1>
				<img className='yogo-logo' src={DarkYogaGirl} alt='Logo' />
			</div>
			<button onClick={handleToggle}>
				{navbarOpen ? (
					<MdClose style={{ color: '#fff', width: '40px', height: '40px ' }} />
				) : (
					<FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
				)}
			</button>
			<ul style={{ display: navbarOpen ? 'flex' : 'none' }} className='menuNav'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/posesMain'>All Poses</Link>
				</li>
				<li>
					<Link to='/mysequence'>My Sequences</Link>
				</li>
				<li>
					<Link to={`/poseDetails/${idForRandomPose}`}>Pose of the Day</Link>
					{/* Again Pose of the day is acting a little weird. Doesn't always switch out. */}
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
