import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function TabPanel(props) {
	const { children, currTabIndex, tabIndex, ...other } = props;
	return (
		<div
			className={'tab-panel markdown-body'}
			hidden={currTabIndex !== tabIndex}
			{...other}
		>
			{currTabIndex === tabIndex && (
				<Box p={3}>
					{children}
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	currTabIndex: PropTypes.any.isRequired,
	tabIndex: PropTypes.any.isRequired,
}