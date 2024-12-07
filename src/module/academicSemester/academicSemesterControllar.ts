import { Request, Response } from "express";
import { academicSemesterServices } from "./academicSemesterServices";
import sendResponse from "../utility/sendResponse";
import catchAsync from "../utility/catchAsync";

const createAcademicSemester = catchAsync(async (req: Request, res: Response) => {
    const academicSemesterInfo = req.body
    const result = await academicSemesterServices.createAcademicSemesterIntoDB(academicSemesterInfo)
    sendResponse(res, { message: "semester create successfull", statusCode: 200, data: result })
})
export const academicSemesterControllars = {
    createAcademicSemester

}