import React from 'react';
import KeishaHeadshot from '../../Assets/KeishaHeadshot.png';
import MelissaHeadshot from '../../Assets/MelissaHeadshot.png';
import MichaelHeadshot from '../../Assets/MichaelHeadshot.png';
import SeanHeadshot from '../../Assets/SeanHeadshot.png';
import './About.css';
import Header from '../Header/Header';

function About(props) {
	return (
		<div>
			<Header />
			<h1 className='aboutTitle'>About</h1>
			<p className='aboutUs'>
				Developed by fellow software engineers desiring to make space in their
				routine for yoga. Easy to use and accessible to all yogis and
				instructors alike. The Flow Factory provides the framework to enhance
				any yoga practice.
				<br />
				<br />
				Browse and learn from our comprehensive yoga library, with a warehouse
				of everything from easy to advanced poses. Follow our structure or
				create your own sequences. Relax your mind, connect your body, and find
				balance.
			</p>

			<p className='subtext'>Enjoy the flow.</p>

			<h1 className='teamTitle'>Our Team</h1>
			<div className='teamCards'>
				<div>
					<a
						className='linkedIn'
						href='https://www.linkedin.com/in/keisha-gittens/'>
						<img className='headshotImg' src={KeishaHeadshot} alt='Keisha' />
					</a>
					<h4>Keisha Gittens</h4>
				</div>
				<div>
					<a
						className='linkedIn'
						href='https://www.linkedin.com/in/melissa-morgan/'>
						<img className='headshotImg' src={MelissaHeadshot} alt='Melissa' />
					</a>
					<h4>Melissa Morgan</h4>
				</div>
				<div>
					<a
						className='linkedIn'
						href='https://www.linkedin.com/in/michaelmyatt/'>
						<img className='headshotImg' src={MichaelHeadshot} alt='Michael' />
					</a>
					<h4>Michael Myatt</h4>
				</div>
				<div>
					<a
						className='linkedIn'
						href='https://www.linkedin.com/in/sean-travis-porter/'>
						<img className='headshotImg' src={SeanHeadshot} alt='Sean' />
					</a>
					<h4>Sean Porter</h4>
				</div>
			</div>
		</div>
	);
}

export default About;
