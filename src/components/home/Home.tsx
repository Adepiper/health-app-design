import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Activity from './activity/Activity';
import History from './history/History';
import classes from './Home.module.scss';

const Home = () => {
	return (
		<div className={classes.container}>
			<Routes>
				<Route path={`activity`} element={<Activity />} caseSensitive />
				<Route path={`history`} element={<History />} caseSensitive />
				<Route path='*' element={<Navigate to={'activity'} />} />
			</Routes>
			<div className={classes.footerContainer}>
				<ul>
					<div>
						<li>
							<Link to={''}>
								<i
									className='fa fa-address-card-o'
									aria-hidden='true'
								></i>
							</Link>
						</li>
						<li>
							<Link to={''}>
								<i
									className='fa fa-address-card-o'
									aria-hidden='true'
								></i>
							</Link>
						</li>
					</div>

					<div>
						<li>
							<Link to={''}>
								<i
									className='fa fa-address-card-o'
									aria-hidden='true'
								></i>
							</Link>
						</li>
						<li>
							<Link to={''}>
								<i
									className='fa fa-address-card-o'
									aria-hidden='true'
								></i>
							</Link>
						</li>
					</div>
				</ul>

				<Link className={classes.addWeight} to={''}>
					<i className='fa fa-plus' aria-hidden='true'></i>
				</Link>
			</div>
		</div>
	);
};

export default Home;
