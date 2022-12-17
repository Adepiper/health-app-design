import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterDom from './routes';

function App() {
	return (
		<BrowserRouter>
			<RouterDom />
		</BrowserRouter>
	);
}

export default App;
