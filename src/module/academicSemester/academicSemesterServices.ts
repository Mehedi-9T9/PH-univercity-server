import {TAcademicSemester } from "./academic.semester.interface"
import { semesterCodeMapping } from "./academicSemesterAllConst"
import { AcademicSemesterModel } from "./academicSemesterModel"

const createAcademicSemesterIntoDB=async(academicSemesterData:TAcademicSemester)=>{

   
    if(semesterCodeMapping[academicSemesterData.semesterName] !== academicSemesterData.semesterCode){
        throw new Error('Invalid Semester Code')
    }

    const result=await AcademicSemesterModel.create(academicSemesterData)
    return result

}
export const academicSemesterServices={
    createAcademicSemesterIntoDB,
}