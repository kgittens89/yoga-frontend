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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
				illum, commodi aspernatur ratione ipsa cum dolores numquam quae, iure
				repellat quibusdam. Mollitia fugit quo placeat architecto ipsam eos
				harum veniam.
			</p>
			<p className='aboutUs'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
				tempore dignissimos! Facilis, dignissimos amet necessitatibus aliquid,
				recusandae, quia enim non veritatis distinctio ipsa nulla numquam iusto
				provident neque praesentium quidem!
			</p>

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