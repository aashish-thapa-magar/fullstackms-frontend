import * as React from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import AddCourse from './addCourse'
import FindAllCourses from './findAllCourses'

export default function Courses() {
	return (
		<>
			<Box>
				<Box>
					<h1>Your Courses</h1>
				</Box>
				<Box sx={{ml: 80}}>
					<AddCourse />
				</Box>
				<Box>
					<FindAllCourses />
				</Box>
			</Box>
		</>
	)
}