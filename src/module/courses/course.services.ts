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

const updateCourseIntoDB = async (id: string, payload: TCourseDemo) => {
    const { preRequisitCourses, ...reminingCourse } = payload
    const basicUpdate = await CoursesModel.findByIdAndUpdate({ _id: id }, reminingCourse, { new: true })

    if (preRequisitCourses && preRequisitCourses.length > 0) {
        const deleteCourses = preRequisitCourses.filter((el) => el.course && el.isDeleted).map((item) => item.course)

        const removePreRequisitCourse = await CoursesModel.findByIdAndUpdate({ _id: id }, {
            $pull: { preRequisitCourses: { course: { $in: deleteCourses } } }
        }, { new: true })

        const addCourse =preRequisitCourses.filter((el)=>el.course && !el.isDeleted)

        console.log(addCourse);

        //deep Explore in support session
        const addPreRequisitCourse =await CoursesModel.findByIdAndUpdate(
            {_id:id},
            {$addToSet:{preRequisitCourses:{$each:addCourse}}})

        
    }


    
    const result =await CoursesModel.findById({_id:id}).populate('preRequisitCourses.course')
    return result
}
export const courseServices = {
    createCourseIntoDB,
    getAllCourseIntoDB,
    getSingleCourseIntoDB,
    deleteCourseIntoDB,
    updateCourseIntoDB
}