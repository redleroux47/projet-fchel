import FormToSave from './components/FormToSave';
import FormToDisplay from './components/FormToDisplay';
import './App.css';
import { readDataByKey } from './utils/indexedDB';

function App() {
	//console.log('app==>', readDataByKey('abc', 1, 'abc', 'a'));
	readDataByKey('abc', 1, 'abc', 'a');
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
