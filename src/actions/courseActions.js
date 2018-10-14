import * as Constants from '../constants/CourseConstants'
export const CreateCourse = (course) => ({
    type: Constants.CREATE_COURSE, course
});