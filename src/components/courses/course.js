import * as React from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import axios from 'axios'

import { useParams } from 'react-router-dom'

export default function Courses() {

	let { courseId } = useParams()

	const [data, setData] = React.useState([])

	React.useEffect(() => {
		axios.get("/instructor/courses/" + courseId).then(res => {
			setData(res.data)
			if (!Object.keys(res.data).length) {
				console.log("No data found")
			} else {
				console.log(res.data)
			}
		})
	}, [])

	return (
		<Box sx={{ height: '100%', width: '100%' }}>
			<ul>
				{
					data.map(course => {
						return (
							<Box>
								<h1> {course.title} </h1>

								{course.units.map(unit => {
									return (
										<Box>
											<h3>{unit.title}</h3>
											
											{unit.chapters.map(chapter => {
												return (
													<Box>
														<h4> {chapter.title} </h4>
													</Box>
												)
											})}
										</Box>
									)
								})}
							</Box>
						)
					})
				}
			</ul>
		</Box>
	)
}