import { Schema, model } from 'mongoose';
import { Tuser, UserModelMethods } from './user.interface';

const userSchema = new Schema<Tuser, UserModelMethods>(
  {
    studentId: { type: String, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, required: true, default: false },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default: 'in-progress',
      required: true,
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

//Custon instance method
// userSchema.methods.isExists = async function (id: string) {
//   const existingUser = await userModel.findOne({ studentId:id });

//   return existingUser;
// };

//Static instance methods
userSchema.statics.isExists = async function (id: string) {
  const existingUser = await userModel.findOne({ studentId: id });
  return existingUser;
};
export const userModel = model<Tuser, UserModelMethods>('User', userSchema);
