import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

import axios from 'axios'

export default function AddCourse() {
	const [open, setOpen] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [desc, setDesc] = React.useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handlePostOnClick = () => {
		axios.post("/instructor/addCourse", { title: title, description: desc });
		setOpen(false);
	};

	return (
		<Box sx={{ border: 'solid' }}>
			<Button onClick={handleClickOpen}>
				Add a new course
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle> New Course </DialogTitle>
				<DialogContent>
					<DialogContentText>
						Provide the title and a short description of the course you are creating
					</DialogContentText>
					<TextField autoFocus required label="Title" type="text"
						value={title} onChange={(e) => setTitle(e.target.value)}
					/>
					<TextField required label="Description" multiline type="text"
						value={desc} onChange={(e) => setDesc(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" onClick={handlePostOnClick}>Create</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}