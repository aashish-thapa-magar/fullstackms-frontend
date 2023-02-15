import Box from '@mui/material/Box'

import WithHeader from './routes/withHeader'
import WithSideNav from './routes/withSideNav'

import Home from './components/home/home'
import Dashboard from './components/dashboard/dashboard'
import Courses from './components/courses/courses'
import Quizzes from './components/quizzes/quizzes'
import Course from './components/courses/course'


import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Box>
			<Routes>
				<Route element={<WithHeader />}>
					<Route path="/" element={<Home />} />
					<Route element={<WithSideNav />}>
						<Route path="/instructor/dashboard" element={<Dashboard />} />
						<Route path="/instructor/courses" element={<Courses />} />
						<Route path="/instructor/courses/:courseId" element={<Course/>} />
						<Route path="/instructor/quizzes" element={<Quizzes />} />
					</Route>
				</Route>
			</Routes>
		</Box>
	);
}

export default App;
