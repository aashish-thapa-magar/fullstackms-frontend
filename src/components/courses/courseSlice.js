import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
	name: 'course',
	initialState: {
		value: 'test',
	},
	reducers: {
		findCourseById: (state, action) => {
			state.value = action.payload
		}
	}
})

export const { findCourseById } = courseSlice.actions

export default courseSlice.reducer