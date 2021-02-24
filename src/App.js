import FormToSave from './components/FormToSave';
import FormToDisplay from './components/FormToDisplay';
import './App.css';

function App() {
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
