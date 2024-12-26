import { TCourseDemo } from "./course.interface"
import { CoursesModel } from "./course.model"

const createCourseIntoDB = async (course: TCourseDemo) => {
    const result = await CoursesModel.create(course)
    return result
}
const getAllCourseIntoDB = async () => {
    const result = await CoursesModel.find().populate("preRequisitCourses.course")
    return result
}
const getSingleCourseIntoDB = async (id: string) => {
    const result = await CoursesModel.findOne({ _id: id }).populate("preRequisitCourses.course")
    return result
}
const deleteCourseIntoDB = async (id: string) => {
    const result = await CoursesModel.findOneAndUpdate({ _id: id }, { isDeleted: true }, { new: true })
    return result
}
const updateCourseIntoDB = async (id: string,payload:TCourseDemo) => {
    const result = await CoursesModel.findOneAndUpdate({ _id: id }, payload, { new: true })
    return result
}
export const courseServices = {
    createCourseIntoDB,
    getAllCourseIntoDB,
    getSingleCourseIntoDB,
    deleteCourseIntoDB,
    updateCourseIntoDB
}