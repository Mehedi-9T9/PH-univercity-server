import { Schema, model, connect } from 'mongoose';
import { TFacultyDemo } from './faculty.interface';

const facultySchema = new Schema<TFacultyDemo>({
    name: { type: String, required: true },
    
  },{timestamps:true});

  export const facultyModel = model<TFacultyDemo>('Faculty', facultySchema);