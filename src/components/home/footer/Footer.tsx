import React from 'react';
import classes from './Footer.module.scss';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ ease: 'anticipate', duration: 0.9 }}
			className={classes.footerContainer}
		>
			<ul>
				<div>
					<li>
						<NavLink
							to={'/activity'}
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 576 512'
							>
								<path d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
							</svg>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/history'}
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path d='M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z' />
							</svg>
						</NavLink>
					</li>
				</div>

				<div>
					<li>
						<NavLink
							to={'/heloo'}
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
							>
								<path d='M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z' />
							</svg>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/hi'}
							className={({ isActive }) =>
								isActive ? classes.active : ''
							}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path d='M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z' />
							</svg>
						</NavLink>
					</li>
				</div>
			</ul>

			<Link className={classes.addWeight} to={'/weight'}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
					<path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
				</svg>
			</Link>
		</motion.div>
	);
};

export default Footer;
