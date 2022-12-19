import { Link } from 'react-router-dom';
import { assetfiles } from '../../../assets';
import classes from './Activity.module.scss';
import { motion } from 'framer-motion';

const Activity = () => {
	return (
		<motion.div
			initial={{ x: 1000 }}
			animate={{ x: 0 }}
			exit={{ x: -1000 }}
			transition={{ delay: 0.1, ease: 'easeInOut', duration: 0.5 }}
			className={classes.container}
		>
			<div className={classes.activityHeader}>
				<h3>My Activity</h3>

				<div className={classes.imgContainer}>
					<img src={assetfiles.navPicture} alt='' />
				</div>
			</div>
			<motion.div
				initial={{ x: 1000 }}
				animate={{ x: 0 }}
				exit={{ x: -1000 }}
				transition={{
					delay: 0.2,
					ease: 'easeInOut',
					duration: 0.58,
				}}
				className={classes.sliderContainer}
			>
				<div className={classes.sliderCard}>
					<div className={classes.iconContainer}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 384 512'
							fill='red'
						>
							<path d='M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z' />
						</svg>
					</div>

					<div className={classes.infoContainer}>
						<h3>866</h3>
						<p>Calories burn</p>
						<div className={classes.progressbar}>
							<div style={{ width: '70%' }}></div>
						</div>
					</div>
				</div>
				<div className={classes.sliderCard}>
					<div className={classes.iconContainer}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 640 512'
							style={{ transform: 'rotate(-90deg)' }}
						>
							<path d='M416 0C352.3 0 256 32 256 32V160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64h32V32H192c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32V480s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64H96V352H64c-35.3 0-64 28.7-64 64z' />
						</svg>
					</div>

					<div className={classes.infoContainer}>
						<h3>7 566</h3>
						<p>Steps</p>
						<div className={classes.progressbar}>
							<div style={{ width: '50%' }}></div>
						</div>
					</div>
				</div>
			</motion.div>

			<div className={classes.goals}>
				<div className={classes.goalHeader}>
					<h3>Goal for week</h3>
					<p>42 of 54</p>
				</div>

				<motion.div
					initial={{ x: 1000 }}
					animate={{ x: 0 }}
					exit={{ x: -1000 }}
					transition={{
						delay: 0.2,
						ease: 'easeInOut',
						duration: 0.58,
					}}
					className={classes.goalGraph}
				>
					<div className={classes.sidebar}>
						<div>10</div>
						<div>8</div>
						<div>6</div>
						<div>4</div>
						<div>2</div>
					</div>
					<div className={classes.chartSection}>
						<div>
							<motion.p
								className={classes.active}
								style={{ height: '20vh' }}
							></motion.p>
							<span>t</span>
						</div>
						<div>
							<motion.p
								className={classes.active}
								style={{ height: '18vh' }}
							></motion.p>
							<span>w</span>
						</div>
						<div>
							<p style={{ height: '5vh' }}></p>
							<span>t</span>
						</div>
						<div>
							<p style={{ height: '12vh' }}></p>
							<span>f</span>
						</div>
						<div>
							<p
								className={classes.active}
								style={{ height: '18vh' }}
							></p>
							<span>s</span>
						</div>
						<div>
							<p style={{ height: '9vh' }}></p>
							<span>s</span>
						</div>
						<div>
							<p style={{ height: '9vh' }}></p>
							<span>m</span>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ x: 1000 }}
					animate={{ x: 0 }}
					exit={{ x: -1000 }}
					transition={{
						delay: 0.2,
						ease: 'easeInOut',
						duration: 0.58,
					}}
					className={classes.trendingWorkouts}
				>
					<div className={classes.trendingHeader}>
						<h3>Trending Workouts</h3>
						<Link to={''}>see all</Link>
					</div>

					<div className={classes.trendingCards}>
						<div className={classes.tredningCardsInfo}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 640 512'
							>
								<path
									fill='#7b66ff'
									d='M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z'
								/>
							</svg>
							<p>Muscle builder</p>
						</div>

						<div className={classes.playericon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 384 512'
							>
								<path
									fill='#c2ff4d'
									d='M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z'
								/>
							</svg>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Activity;
