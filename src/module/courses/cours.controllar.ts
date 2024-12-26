import { NextFunction, Request, Response } from "express";
import sendResponse from "../utility/sendResponse";
import { courseServices } from "./course.services";
import catchAsync from "../utility/catchAsync";

const createCourse =catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const courseInfo =req.body
    const result =await courseServices.createCourseIntoDB(courseInfo)
    sendResponse(res,{statusCode:200,message:"course create successfull",data:result})
    })
const getAllCourse =catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    
    const result =await courseServices.getAllCourseIntoDB()
    sendResponse(res,{statusCode:200,message:"Get All Courses successfull",data:result})
    })
export const coursesCotrollars ={
    createCourse,
    getAllCourse
}