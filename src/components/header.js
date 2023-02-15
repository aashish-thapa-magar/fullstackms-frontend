import * as React from 'react'

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'

export default function Header() {
	return (
		<Box>
			<AppBar sx={{ backgroundColor: 'purple', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar sx={{ justifyContent: 'center' }}>
					<Box sx={{ m: 2, borderRadius: 2, width: 400, display: 'flex' }}>
						<InputBase placeholder="Search..." sx={{ backgroundColor: 'white', height: '100%', borderRadius: 2, borderTopRightRadius: 0, borderBottomRightRadius: 0, p: 1, width: '100%' }} />
						<Button sx={{ backgroundColor: 'skyblue', borderRadius: 2, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
							<SearchIcon />
						</Button>
					</Box>

					<Box sx={{ position: 'absolute', ml: 140 }}>
						<IconButton>
							<AccountCircle />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	)
}