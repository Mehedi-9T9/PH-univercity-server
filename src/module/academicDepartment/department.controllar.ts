import catchAsync from "../utility/catchAsync"
import sendResponse from "../utility/sendResponse"
import { departmentServices } from "./department.service"

const createDepartment =catchAsync(async(req,res,next)=>{
    const departmentInfo =req.body
    const result =await departmentServices.createDepartmentIntoDB(departmentInfo)
    sendResponse(res,{statusCode:200,message:"Department create Successfull",data:result})
})
const updateDepartment =catchAsync(async(req,res,next)=>{
    const departmentInfo =req.body
    const {departmentId}=req.params
    const result =await departmentServices.updateDepartmentIntoDB(departmentInfo,departmentId)
    sendResponse(res,{statusCode:200,message:"Department update Successfull",data:result})
})
export const departmentControllars ={
    createDepartment,
    updateDepartment
}