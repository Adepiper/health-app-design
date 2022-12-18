import React from 'react';
import classes from './History.module.scss';
import LineChartGraph from './LineChart';

const History = () => {
	return (
		<div className={classes.container}>
			<div className={classes.activityHeader}>
				<h3>History</h3>

				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
					<path d='M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z' />
				</svg>
			</div>

			<h2 className={classes.date}>Monday, 11 July</h2>

			<div className={classes.box}>
				<h3>Weight</h3>
				<div className={classes.weightInfo}>
					<h2>
						52,3<span>kg</span>
					</h2>
					<LineChartGraph />
				</div>
			</div>
			<div className={classes.box}>
				<div className={classes.bmiHeader}>
					<h3>BMI</h3>

					<div>
						<h3>17.3</h3>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 320 512'
						>
							<path d='M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z' />
						</svg>
					</div>
				</div>

				<div className={classes.progressContainer}>
					<div className={classes.progressone}>
						<div></div>
					</div>
					<div className={classes.progresstwo}>
						<div></div>
					</div>
					<div className={classes.progressthree}>
						<div></div>
					</div>
				</div>

				<div className={classes.progressBarNumber}>
					<div>
						<p className={classes.firstPointer}>18,5</p>
					</div>
					<div></div>
					<div>
						<p className={classes.lastPointer}>25</p>
					</div>
				</div>

				<div className={classes.progressLabel}>
					<div className={classes.label}>
						<span className={classes.low}></span>
						<p>Low</p>
					</div>
					<div className={classes.label}>
						<span className={classes.normal}></span>
						<p>Normal</p>
					</div>
					<div className={classes.label}>
						<span className={classes.high}></span>
						<p>high</p>
					</div>
				</div>
			</div>
			<div className={`${classes.box} ${classes.sleep}`}>
				<div className={classes.sleepInfo}>
					<h3>Sleep</h3>
					<h4>
						6<span>h</span> 20<span>m</span>
					</h4>
				</div>

				<div className={classes.chartSection}>
					<div>
						<p
							className={classes.active}
							style={{ height: '14vh' }}
						></p>
						<span>t</span>
					</div>
					<div>
						<p
							className={classes.active}
							style={{ height: '11vh' }}
						></p>
						<span>w</span>
					</div>
					<div>
						<p style={{ height: '4vh' }}></p>
						<span>t</span>
					</div>
					<div>
						<p style={{ height: '2vh' }}></p>
						<span>f</span>
					</div>
					<div>
						<p
							className={classes.active}
							style={{ height: '9vh' }}
						></p>
						<span>s</span>
					</div>
					<div>
						<p style={{ height: '2vh' }}></p>
						<span>s</span>
					</div>
					<div>
						<p style={{ height: '3vh' }}></p>
						<span>m</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
