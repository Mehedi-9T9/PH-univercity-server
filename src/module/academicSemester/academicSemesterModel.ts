import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academic.semester.interface";
import { months } from "./academicSemesterAllConst";



const academicSemester = new Schema<TAcademicSemester>({
    semesterName: { type: String, required: true,enum:["Autumn","Summer","Fall"] },
    semesterCode: { type: String, required: true,enum:["01","02","03"] },
    year: {type:String,required:true},
    startMonth:{type:String,
        enum:months,
        required:true
    },
    endMonth:{type:String,
        enum:months,
        required:true
    },
  });
  academicSemester.pre('save',async function (next) {
    const isExistsSemester=await AcademicSemesterModel.findOne({semesterName:this.semesterName,year:this.year})
    if(isExistsSemester){
      throw new Error("The semister already exists")
    }
    next()
  })

  export const AcademicSemesterModel = model<TAcademicSemester>('AcademicSemester', academicSemester);  