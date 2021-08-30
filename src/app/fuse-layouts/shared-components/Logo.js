import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewsAndFaqData } from 'app/store/pages/homeSlice';

const useStyles = makeStyles(theme => ({
	root: {
		'& .logo-icon': {
			width: 24,
			height: 24,
			transition: theme.transitions.create(['width', 'height'], {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		},
		'& .react-badge, & .logo-text': {
			transition: theme.transitions.create('opacity', {
				duration: theme.transitions.duration.shortest,
				easing: theme.transitions.easing.easeInOut
			})
		}
	},
	reactBadge: {
		backgroundColor: '#121212',
		color: '#61DAFB'
	}
}));

function Logo() {
	const classes = useStyles();

	let dispatch = useDispatch();

	useEffect( () => {
		const fetchBaseData = async() => {
			dispatch(fetchNewsAndFaqData());
		}

		fetchBaseData();
	})

	return (
		<div className={clsx(classes.root, 'flex items-center')}>
			<img
				className="react-logo"
				src="assets/img/logo.png"
				alt="react"				
			/>
			
		</div>
	);
}

export default Logo;
