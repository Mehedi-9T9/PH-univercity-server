import { Request, Response } from "express"
import catchAsync from "../utility/catchAsync"
import sendResponse from "../utility/sendResponse"
import { facultyServices } from "./faculty.service"

const createFaculty=catchAsync(async(req:Request,res:Response)=>{
    const facultyInfo=req.body
    const result =await facultyServices.createFacultyIntoDB(facultyInfo)
    sendResponse(res,{statusCode:200,message:"faculty created successfull",data:result})
    })
const updateFaculty=catchAsync(async(req:Request,res:Response)=>{
    const facultyInfo=req.body
    const {facultyId} =req.params
    const result =await facultyServices.updateFacultyIntoDB(facultyInfo,facultyId)
    sendResponse(res,{statusCode:200,message:"faculty update successfull",data:result})
    })

export const facultyControllars ={
    createFaculty,
    updateFaculty
}