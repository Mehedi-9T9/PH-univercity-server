import { Schema, model } from 'mongoose';
import { TDepartment } from './depertment.interface';

const departmentSchema = new Schema<TDepartment>({
    name: { type: String, required: true },
    facultyId: { type: Schema.Types.ObjectId, required: true ,ref:'Faculty'},
   
  });

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
      throw new Error("Department does not change")
    }
    next()
  })




  export const DepartmentModel = model<TDepartment>('Department', departmentSchema);
