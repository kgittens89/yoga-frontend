import React from 'react';
import KeishaHeadshot from '../../Assets/KeishaHeadshot.png'
import MelissaHeadshot from '../../Assets/MelissaHeadshot.png'
import MichaelHeadshot from '../../Assets/MichaelHeadshot.png'
import SeanHeadshot from '../../Assets/SeanHeadshot.png'
import './About.css'

function About(props) {
    return (
			<div>
				<h1 className='aboutTitle'>About</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum, commodi aspernatur ratione ipsa cum dolores numquam quae, iure repellat quibusdam. Mollitia fugit quo placeat architecto ipsam eos harum veniam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
					tempore dignissimos! Facilis, dignissimos amet necessitatibus aliquid,
					recusandae, quia enim non veritatis distinctio ipsa nulla numquam
					iusto provident neque praesentium quidem!
				</p>

				<h2 className='teamTitle'>Our Team</h2>
				<div className='teamCards'>
                    <div>
                        <h4>Keisha Gittens</h4>
                        <img src={KeishaHeadshot} alt='Keisha' />
                    </div>
                    <div>
                        <h4>Melissa Morgan</h4>
                        <img src={MelissaHeadshot} alt='Melissa' />
                    </div>
                    <div>
                        <h4>Michael Myatt</h4>
                        <img src={MichaelHeadshot} alt='Michael' />
                    </div>
                    <div>
                        <h4>Sean Porter</h4>
                        <img src={SeanHeadshot} alt='Sean' />
                    </div>
				</div>
			</div>
		);
}

export default About;