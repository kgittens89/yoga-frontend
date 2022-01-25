import React from 'react';
import backgroundFlowers from "../../Assets/backgroundFlowers.jpg"
import './Home.css'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <section className='Title'>
            The Flow Factory
            <ul className='hpLinks'>
                <li>All Poses</li>
                <li>My Sequences</li>
                <li>Pose of the Day</li>
                <li>About</li>
            </ul>
        </section>
    );
}

export default Home;