import { Model } from 'mongoose';

export type Tuser = {
  studentId: string;
  password: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
};

//custom instance methods
// export interface userMethods  {
//   isExists(id: string): Promise<Tuser | null>;
// };
// export type UserModelMethods = Model<Tuser, {}, userMethods>;

//static instance method
// export interface userMethods  {
//   isExists(id: string): Promise<Tuser | null>;
// };

export interface UserModelMethods extends Model<Tuser> {
  isExists(id: string): Promise<Tuser | null>;
}
