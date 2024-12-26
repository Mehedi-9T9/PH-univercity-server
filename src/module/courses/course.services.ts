import { TCourseDemo } from "./course.interface"
import { CoursesModel } from "./course.model"

const createCourseIntoDB =async(course:TCourseDemo)=>{
    const result =await CoursesModel.create(course)
    return result
}
const getAllCourseIntoDB =async ()=>{
    const result =await CoursesModel.find().populate("preRequisitCourses.course")
    return result
}
export const courseServices ={
    createCourseIntoDB,
    getAllCourseIntoDB
}