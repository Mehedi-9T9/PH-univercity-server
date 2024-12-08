import { DepartmentModel } from "./department.model";
import { TDepartment } from "./depertment.interface";

const createDepartmentIntoDB =async(payload:TDepartment)=>{
    const result =await DepartmentModel.create(payload)
    return result
}
const updateDepartmentIntoDB =async(payload:TDepartment,id:string)=>{
    const result =await DepartmentModel.findOneAndUpdate({_id:id},{name:payload.name},{new:true})
    return result
}
export const departmentServices ={
    createDepartmentIntoDB,
    updateDepartmentIntoDB
}