// import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import MySequenceDisplay from './components/MySequenceDisplay/MySequenceDisplay';
import Navigation from './components/Navigation/Navigation';
import PosesMain from './components/PosesMain/PosesMain';
import PoseDetails from './components/PosesMain/PoseDetails/PoseDetails';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/posesMain' element={<PosesMain />} />
					<Route path='/poseDetails/:id' element={<PoseDetails />} />
					<Route path='/mySequence' element={<MySequenceDisplay />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
