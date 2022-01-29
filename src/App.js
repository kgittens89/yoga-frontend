// import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import MySequenceDisplay from './components/MySequenceDisplay/MySequenceDisplay';
import PoseByCategory from './components/PosesMain/PoseByCategory/PoseByCategory';
import PosesMain from './components/PosesMain/PosesMain';
import PoseDetails from './components/PosesMain/PoseDetails/PoseDetails';
import SequenceDetails from './components/MySequenceDisplay/SequenceDetails';

import './App.css';

function App() {
	return (
		<div className='App'>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/posesMain' element={<PosesMain />} />
					<Route path='/poseDetails/:id' element={<PoseDetails />} />
					<Route path='/mySequence' element={<MySequenceDisplay />} />
					<Route path='/about' element={<About />} />
					<Route path='/posesMain/:catName' element={<PoseByCategory />} />
					<Route path='/sequenceDetails/:sequenceId' element={<SequenceDetails />} />

				</Routes>
			</main>
		</div>
	);
}

export default App;
