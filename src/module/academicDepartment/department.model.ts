import { Schema, model } from 'mongoose';
import { TDepartment } from './depertment.interface';

const departmentSchema = new Schema<TDepartment>({
    name: { type: String, required: true },
    facultyId: { type: Schema.Types.ObjectId, required: true ,ref:'Faculty'},
    confirm:{type:Boolean,required: true}
   
  });

  class AppError extends Error {
    public statusCode:number;
    constructor(statusCode:number,message:string,stack='') {
      super(message)
      this.statusCode=statusCode

      if(stack){
        this.stack=stack
      }else{

        Error.captureStackTrace(this,this.constructor)
      }
      
    }
  }


  departmentSchema.pre('save',async function(next){
    const isExists=await DepartmentModel.findOne({name:this.name})
    if(isExists){
      throw new Error("Department already Exists")
    }
    next()
  })
  departmentSchema.pre('findOneAndUpdate',async function(next){

    const quary =this.getQuery()
    const isExists=await DepartmentModel.findOne(quary)
    if(!isExists){
      throw new AppError(404,"Department does not change")
    }
    next()
  })




  export const DepartmentModel = model<TDepartment>('Department', departmentSchema);
