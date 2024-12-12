import { TFacultyDemo } from "./faculty.interface"
import { facultyModel } from "./faculty.model"

const createFacultyIntoDB = async (payload: TFacultyDemo) => {
    const result = await facultyModel.create(payload)
    return result
}
const updateFacultyIntoDB = async (payload: TFacultyDemo, id: string) => {
    const result = await facultyModel.findByIdAndUpdate({ _id: id }, { name: payload.name }, { new: true })
    return result
}
const getSingleFacultyIntoDB = async (id: string) => {
    const result = await facultyModel.findOne({ _id: id })
    return result
}
export const facultyServices = {
    createFacultyIntoDB,
    getSingleFacultyIntoDB,
    updateFacultyIntoDB
}