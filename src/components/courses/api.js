import axios from 'axios'

export const getCourse = axios.get("/instructor/courses")
export const postCourse = axios.post("/instructor/courses/addCourse")
