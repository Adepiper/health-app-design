import { motion } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';
import Activity from './activity/Activity';
import History from './history/History';
import classes from './Home.module.scss';

const Home = () => {
	return (
		<motion.div className={classes.container}>
			<Routes>
				<Route path={`activity`} element={<Activity />} caseSensitive />
				<Route path={`history`} element={<History />} caseSensitive />
				<Route path={`history`} element={<History />} caseSensitive />
				<Route path='*' element={<Navigate to={'activity'} />} />
			</Routes>
		</motion.div>
	);
};

export default Home;
