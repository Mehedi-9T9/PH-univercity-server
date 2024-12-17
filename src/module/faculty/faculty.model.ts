import { Schema, model, connect } from 'mongoose';
import { TFacultyDemo } from './faculty.interface';

const facultySchema = new Schema<TFacultyDemo>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    
  },{timestamps:true});

  export const facultyModel = model<TFacultyDemo>('Faculty', facultySchema);