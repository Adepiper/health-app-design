import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RouterDom from './routes';

function App() {
	return (
		<BrowserRouter>
			<RouterDom />
		</BrowserRouter>
	);
}

export default App;
