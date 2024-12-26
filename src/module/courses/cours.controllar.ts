import { NextFunction, Request, Response } from "express";
import sendResponse from "../utility/sendResponse";
import { courseServices } from "./course.services";
import catchAsync from "../utility/catchAsync";

const createCourse = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const courseInfo = req.body
    const result = await courseServices.createCourseIntoDB(courseInfo)
    sendResponse(res, { statusCode: 200, message: "course create successfull", data: result })
})
const getAllCourse = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await courseServices.getAllCourseIntoDB()
    sendResponse(res, { statusCode: 200, message: "Get All Courses successfull", data: result })
})
const getSingleCourse = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await courseServices.getSingleCourseIntoDB(id)
    sendResponse(res, { statusCode: 200, message: "Get Single Courses successfull", data: result })
})
const deleteCourse = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const result = await courseServices.deleteCourseIntoDB(id)
    sendResponse(res, { statusCode: 200, message: " Delete successfull", data: result })
})
const updateCourse = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const updateDoc =req.body
    const result = await courseServices.updateCourseIntoDB(id,updateDoc)
    sendResponse(res, { statusCode: 200, message: "Course Update successfull", data: result })
})
export const coursesCotrollars = {
    createCourse,
    getSingleCourse,
    getAllCourse,
    deleteCourse,
    updateCourse
}