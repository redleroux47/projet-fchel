import FormToSave from './components/FormToSave';
import FormToDisplay from './components/FormToDisplay';
import './App.css';
import { readDataByKey } from './utils/indexedDB';
import { useState, useEffect } from 'react';

function App() {
	const [state, setState] = useState(null);
	useEffect(() => {
		return readDataByKey('abc', 1, 'abc', 'a').then((result) =>
			setState(result)
		);
	}, [state]);
	console.log(state);
	return (
		<div className="app">
			<h1>IndexedDB exemple</h1>
			<div className="app__form">
				<FormToSave />
				<FormToDisplay />
			</div>
		</div>
	);
}

export default App;
