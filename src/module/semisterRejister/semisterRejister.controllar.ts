import catchAsync from "../utility/catchAsync"
import sendResponse from "../utility/sendResponse"
import { semisterRejisterServices } from "./semisterRejister.services"

const createSemisterRejister =catchAsync(async(req,res,next)=>{

    const result =await semisterRejisterServices.createSemisterRejisterIntoDB(req.body)
    sendResponse(res,{statusCode:200,message:"Semister Rejister Successfull",data:result})

})
const getAllSemisterRejister =catchAsync(
    async(req,res,next)=>{
        const result =await semisterRejisterServices.getAllSemisterRejisterIntoDB()
        sendResponse(res,{statusCode:200,message:"All Data Get successfull",data:result})
    }
)
const getSingleSemisterRejister =catchAsync(
    async(req,res,next)=>{
        const {id}=req.params
        const result =await semisterRejisterServices.getSingleSemisterRejisterIntoDB(id)
        sendResponse(res,{statusCode:200,message:"Get Single Data successfull",data:result})
    }
)
const updateSemisterRejister =catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const semisterRejisterInfo =req.body
    const result =await semisterRejisterServices.updateSemisterRejisterIntoDB(id,semisterRejisterInfo)
    sendResponse(res,{statusCode:200,message:"Semister Rejister Update Successfull",data:result})
})
export const semisterRejisterControllars ={
    createSemisterRejister,
    getAllSemisterRejister,
    getSingleSemisterRejister,
    updateSemisterRejister
}