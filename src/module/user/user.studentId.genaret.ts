import { AcademicSemesterModel } from "../academicSemester/academicSemesterModel";
import { Tstudent } from "../student/student.interface";
import { userModel } from "./user.model";

const lastDigit = async () => {
  const lastStudentId = await userModel.findOne({ role: 'student' }, { studentId: 1, _id: 0 }).sort({ createdAt: -1 })
  const studentId = lastStudentId?.studentId
  return studentId

}

export const genaretID = async (studentData: Tstudent) => {
  let currentId = (0).toString()

  const lastStudentID = await lastDigit()
  const lastSemesterCode = lastStudentID?.toString().substring(4, 6)
  const lastSemesterYear = lastStudentID?.toString().substring(0, 4)

  const semesterInfo = await AcademicSemesterModel.findById({ _id: studentData.admissionSemester })
  const currentLastSemesterYear = semesterInfo?.year
  const currentLastSemesterCode = semesterInfo?.semesterCode

  if (lastStudentID && lastSemesterYear === currentLastSemesterYear && lastSemesterCode === currentLastSemesterCode) {
    currentId = lastStudentID.toString().substring(6)
  }

  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0')
  const genaretId = `${semesterInfo?.year}${semesterInfo?.semesterCode}${incrementId}`
  return genaretId

}