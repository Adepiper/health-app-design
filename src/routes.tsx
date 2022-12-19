import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Addweight from './components/add-weight/Addweight';
import Activity from './components/home/activity/Activity';
import Footer from './components/home/footer/Footer';
import History from './components/home/history/History';

const RouterDom = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path={`/history`} element={<History />} />
				<Route path={`/weight`} element={<Addweight />} />
				<Route path={`/activity`} element={<Activity />} />
				<Route path='*' element={<Navigate to={'/activity'} />} />
			</Routes>
			{location.pathname !== '/weight' && <Footer />}
		</AnimatePresence>
	);
};

export default RouterDom;
