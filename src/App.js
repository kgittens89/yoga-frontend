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
import PoseByCategory from './components/PosesMain/PoseByCategory/PoseByCategory';

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
					<Route path='/posesMain/:catName' element={<PoseByCategory />}/>

				</Routes>
			</main>
		</div>
	);
}

export default App;
