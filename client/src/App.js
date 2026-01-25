import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ButtonFloat from './components/ButtonFloat/ButtonFloat.jsx';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
	return (
		<div className="App">
			<ButtonFloat />
			<Header />
			<NavBar />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
