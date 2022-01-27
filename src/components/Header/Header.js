import React from 'react';
import './Header.css';
import YogaGirl from '../../Assets/YogaGirl.png';

function Header() {
	return (
		<div className='header-box'>
			<h1 className='header-text'>The Flow Factory</h1>
			<img className='yogo-logo' src={YogaGirl} alt='Logo' />
		</div>
	);
}

export default Header;
