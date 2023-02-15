import React from 'react'
import SideNavBar from '../components/sideNavBar'
import { Outlet } from 'react-router'

import Box from '@mui/material/Box'

export default () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<SideNavBar />
			<Box sx={{ mt: 12, mx: 2, width: '100%'}}>
				<Outlet />
			</Box>
		</Box>
	);
};
