import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
// https://react-icons.github.io/react-icons/

function Navigation(props) {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    return (
			<nav className='navBar'>
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose
							style={{ color: '#fff', width: '40px', height: '40px ' }}
						/>
					) : (
						<FiMenu
							style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
						/>
					)}
				</button>
				<ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/poses'>All Poses</Link>
					</li>
					<li>
						<Link to='/mysequence'>My Sequences</Link>
					</li>
					<li>
						<Link to='/poseDetails'>Pose of the Day</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		);
}

export default Navigation;