import { Navigate, Route, Routes } from 'react-router-dom';
import Addweight from './components/add-weight/Addweight';
import Home from './components/home/Home';

const RouterDom = () => {
	return (
		<Routes>
			<Route path={`/home/*`} element={<Home />} caseSensitive />
			<Route path={`/weight`} element={<Addweight />} caseSensitive />
			<Route path='*' element={<Navigate to={'/home'} />} />
		</Routes>
	);
};

export default RouterDom;
