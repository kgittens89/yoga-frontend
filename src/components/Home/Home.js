import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section>
            <h1 className='title'>The Flow Factory</h1>
            <ul className='homeNav'>
                <li>
                    <Link to='/poses'>All Poses</Link>
                </li>
                <li>
                    <Link to='/mySequence'>My Sequences</Link>
                </li>
                <li>
                    <Link to='/poseDetails'>Pose of the Day</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </section>
		);
}

export default Home;