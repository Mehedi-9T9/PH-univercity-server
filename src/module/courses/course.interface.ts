import { Types } from "mongoose"

export type preRequisitCoursesDemo = {
    course: Types.ObjectId,
    isDeleted: boolean
}

export type TCourseDemo = {
    title: string
    prefix: string
    code: number
    creadits: number
    preRequisitCourses: [preRequisitCoursesDemo]
    isDeleted: boolean
}