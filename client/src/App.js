import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ButtonFloat from './components/ButtonFloat/ButtonFloat.jsx';

function App() {
	return (
		<div className="App">
			<ButtonFloat />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
