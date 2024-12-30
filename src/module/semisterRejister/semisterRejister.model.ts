import { model, Schema } from "mongoose";
import { SemisterRejiserDemo } from "./semisterRejister.interface";


const semisterRejisterSchema = new Schema<SemisterRejiserDemo>({
    academicSemister:{
        type:Schema.Types.ObjectId,
        unique:true,
        ref:'AcademicSemester'
    },
    status:{
        type:String,enum:["Upcomming","OnGoing","End"],default:"Upcomming"
    },
    startDate:{
        type:String,required:true
    },
    endDate:{
        type:String,required:true
    },
    minCreadits:{
        type:Number, required:true
    }, 
    maxCreadits:{
        type:Number, required:true
    }

},{timestamps:true})

export const SemisterRejisterModel = model<SemisterRejiserDemo>('SemisterRejister', semisterRejisterSchema);