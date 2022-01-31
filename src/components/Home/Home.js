import React from 'react';
import { Link } from 'react-router-dom';

import useFetchRandomPose from '../../hooks/useFetchRandomPose';
import './Home.css';
import DarkYogaGirl from '../../Assets/DarkYogaGirl.png'

function Home() {
    const idForRandomPose = useFetchRandomPose();

    return (
        <section>
            <h1 className='title'>The Flow Factory</h1>
            <img className='homeGirl' src={DarkYogaGirl} alt="Yoga Meditation Logo" />
            <ul className='homeNav'>
                <li>
                    <Link to='/posesMain'>All Poses</Link>
                </li>
                <li>
                    <Link to='/mySequence'>User Sequences</Link>
                </li>
                <li>
                    <Link to={`/poseDetails/${idForRandomPose}`}>Random Pose</Link> 
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </section>
		);
}

export default Home;