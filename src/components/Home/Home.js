import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import useFetchRandomPose from '../../hooks/useFetchRandomPose';

function Home() {
    const idForRandomPose = useFetchRandomPose();

    return (
        <section>
            <h1 className='title'>The Flow Factory</h1>
            <ul className='homeNav'>
                <li>
                    <Link to='/posesMain'>All Poses</Link>
                </li>
                <li>
                    <Link to='/mySequence'>My Sequences</Link>
                </li>
                <li>
                    <Link to={`/poseDetails/${idForRandomPose}`}>Pose of the Day</Link> 
                    {/* Pose of the Day only works on initial click, Not sure why?? */}
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </section>
		);
}

export default Home;