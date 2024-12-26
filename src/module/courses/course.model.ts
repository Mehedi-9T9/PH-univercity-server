import { model, Schema } from "mongoose";
import { preRequisitCoursesDemo, TCourseDemo } from "./course.interface";



const preRequisitCoursesShema = new Schema<preRequisitCoursesDemo>({
    course:{type:Schema.Types.ObjectId,ref:'Course'},
    isDeleted:{type:Boolean}
})
const coursesSchema = new Schema<TCourseDemo>({
    title: { type: String, required: true },
    prefix: { type: String, required: true },
    code: { type: Number, required: true },
    creadits: { type: Number, required: true },
    preRequisitCourses: [preRequisitCoursesShema],
    
  });

 export const CoursesModel = model<TCourseDemo>('Course', coursesSchema);