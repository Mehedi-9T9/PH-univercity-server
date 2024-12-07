import { Schema, model } from 'mongoose';
import {
  Tname,
  Tstudent,
  Tcontact,
  Taddress,
  Tgardian,
} from './student.interface';

const nameSchema = new Schema<Tname>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false },
);
const contactShema = new Schema<Tcontact>(
  {
    phone: { type: String, required: true },
    whatsApp: { type: String, required: true },
    imo: { type: String, required: true },
  },
  { _id: false },
);

const addressSchema = new Schema<Taddress>(
  {
    distric: { type: String, required: true },
    division: { type: String, required: true },
    city: { type: String, required: true },
  },
  { _id: false },
);

const gardianSchema = new Schema<Tgardian>(
  {
    father: { type: String, required: true },
    mother: { type: String, required: true },
  },
  { _id: false },
);
const studentSchema = new Schema<Tstudent>({
  // _id:{type:Schema.ObjectId},
  name: nameSchema,
  email: { type: String, required: true },
  studentId: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: 'User',
  },
  admissionSemester:{type:Schema.Types.ObjectId,ref:'AcademicSemester',required:true},
  contact: contactShema,
  address: addressSchema,
  gardian: gardianSchema,
});
export const studentModel = model<Tstudent>('student', studentSchema);
