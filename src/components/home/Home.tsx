import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Activity from './activity/Activity';
import History from './history/History';

const Home = () => {
	return (
		<div>
			<Routes>
				<Route path={`activity`} element={<Activity />} caseSensitive />
				<Route path={`history`} element={<History />} caseSensitive />
				<Route path='*' element={<Navigate to={'activity'} />} />
			</Routes>
		</div>
	);
};

export default Home;
