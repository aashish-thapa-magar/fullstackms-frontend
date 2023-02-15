import * as React from 'react'

import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Link from '@mui/material/Link'

import axios from 'axios'

import { useDispatch } from 'react-redux'

import { findCourseById } from './courseSlice'

export default function FindAllCourses() {
	const dispatch = useDispatch()

	const [data, setData] = React.useState([])

	React.useEffect(() => {
		axios.get("/instructor/getAllCourses").then(res => {
			console.log(res.data)
			setData(res.data)
		})
	}, [])

	const columns = [
		{
			field: 'title', headerName: 'Title', width: 300, flex: 1,
			renderCell: (params) => (<Link onClick={() => dispatch(findCourseById(params.value))} href={"http://localhost:3000/instructor/courses/" + params.id}> {params.value}</Link >),
		},
		{ field: 'description', headerName: 'Description', width: 300, flex: 0 },
		{ field: 'prerequisite', headerName: 'Prerequisite', width: 100, flex: 2 },
	];


	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableSelectionOnClick
				sx={{}}
			/>
		</Box>
	)
}
