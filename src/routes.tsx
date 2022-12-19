import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Addweight from './components/add-weight/Addweight';
import Home from './components/home/Home';

const RouterDom = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path={`/home/*`} element={<Home />} />
				<Route path={`/weight`} element={<Addweight />} />
				<Route path='*' element={<Navigate to={'/home'} />} />
			</Routes>
		</AnimatePresence>
	);
};

export default RouterDom;
