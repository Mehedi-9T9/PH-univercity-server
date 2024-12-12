import { Types } from 'mongoose';

export type Tname = {
  firstName: string;
  lastName: string;
};
export type Tcontact = {
  phone: string;
  whatsApp: string;
  imo: string;
};
export type Taddress = {
  distric: string;
  division: string;
  city: string;
};
export type Tgardian = {
  father: string;
  mother: string;
};
export type Tstudent = {
  _id: Types.ObjectId;
  name: Tname;
  email: string;
  studentId: string;
  userId: Types.ObjectId;
  isDelete:boolean;
  admissionSemester:Types.ObjectId;
  contact: Tcontact;
  address: Taddress;
  gardian: Tgardian;
};
