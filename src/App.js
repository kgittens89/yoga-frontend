// import { useNavigate } from 'react-router-dom';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
	// const navigate = useNavigate();
	return (
		<div className='App'>
			<Navigation />
			<Home />
			<main>
        {/* <Routes>
          <Route path='/' element={<Home />}/>
        </Routes> */}
      </main>
		</div>
	);
}

export default App;
