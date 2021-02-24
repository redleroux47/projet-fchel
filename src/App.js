import { useRedux } from './Redux/StateProvider';

function App() {
	const [state, dispatch] = useRedux();
	return (
		<div className="App">
			<h1> Hello World!</h1>
		</div>
	);
}

export default App;
