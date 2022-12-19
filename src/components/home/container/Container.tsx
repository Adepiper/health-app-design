import { motion } from 'framer-motion';
import classes from './Container.module.scss';

const Container = ({ children }: { children: any }) => {
	return (
		<motion.div
			className={classes.container}
			initial={{ x: 1000 }}
			animate={{ x: 0 }}
			exit={{ x: -1000 }}
			transition={{ delay: 0.5, ease: 'easeInOut', duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
};

export default Container;
