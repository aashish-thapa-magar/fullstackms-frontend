import * as React from 'react'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'

import ListItemIcon from '@mui/material/ListItemIcon'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import QuizIcon from '@mui/icons-material/Quiz'

import { useNavigate } from 'react-router-dom'

export default function SideNavBar() {
	const [open, setOpen] = React.useState(true);

	const navigate = useNavigate();

	const handleDrawerToggle = () => {
		if (open) {
			setOpen(false);
		} else {
			setOpen(true);
		}

	}

	const drawerWidth = 200;
	const drawerItems = [
		{
			text: 'Dashboard',
			icon: <DashboardIcon />,
			path: '/instructor/dashboard'
		},
		{
			text: 'Courses',
			icon: <AutoStoriesIcon />,
			path: '/instructor/courses'
		},
		{
			text: 'Quizzes',
			icon: <QuizIcon />,
			path: '/instructor/quizzes'
		}
	]

	return (
		<Box>
			<CssBaseline />
			<Drawer variant='permanent' open={open} sx={{
				width: open ? drawerWidth : 50,
				position: 'relative',
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: open ? drawerWidth : 50, boxSizing: 'border-box' },
			}}>
				<Toolbar />
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: open? 'flex-start' : 'center', pt: 3, mx: 0.5 }}>
					<IconButton onClick={handleDrawerToggle}>
						<MenuIcon />
					</IconButton>
				</Box>
				<Box sx={{ overflow: 'hidden' }}>
					<List>
						{drawerItems.map((item) => (
							<ListItem disableGutters disablePadding key={item.text} sx={{ display: 'flex' }}>
								<ListItemButton disableGutters onClick={() => navigate(item.path)} sx={{}}>
									<ListItemIcon sx={{ mx: 1, minWidth: 30, diplsay: 'flex', justifyContent: 'center'}}>
										{item.icon}
									</ListItemIcon>
									<ListItemText primary={item.text} sx={{ opacity: open? 1 : 0, ml: 1 }} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</Box>
	)
}