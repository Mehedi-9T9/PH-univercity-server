

import mongoose from 'mongoose';
import { Tstudent } from '../student/student.interface';
import { Tuser } from './user.interface';

import { userModel } from './user.model';
import { genaretID } from './user.studentId.genaret';
import { studentModel } from '../student/student.model';

const createUserIntoDB = async (studentData: Tstudent) => {
  const userData: Partial<Tuser> = {};



  userData.password = 'mehedi200';
  userData.studentId = await genaretID(studentData);
  // userData.studentId = "2025020001";
  userData.role = 'student';

  //custom instance methods
  // const users = new userModel(userData)
  // if(await users.isExists("ms1122")){
  //     throw new Error("user Already exists")
  // }
  // const createdUser= await users.save()

  //custom statics instance methods
  if (await userModel.isExists(userData.studentId)) {
    throw new Error('user Already exists');
  }
  const session = await mongoose.startSession()
  try {
    session.startTransaction()
    const createdUser = await userModel.create([userData], { session });

    if (!createdUser.length) {
      throw new Error("user create fail")

    }


    studentData.studentId = createdUser[0].studentId;
    studentData.userId = createdUser[0]._id;
    const createdStudent = await studentModel.create([studentData], { session });

    if (!createdStudent.length) {
      throw new Error("user create fail")
      
    }

    await session.commitTransaction();
    await session.endSession();
  
    return createdStudent;

  } catch (error:any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error)
  } finally {

  }

};
const getSingleUserIntoDB = async (id: string) => {
  const singleUser = await userModel.findOne({ _id: id });
  return singleUser;
};

export const userServices = {
  createUserIntoDB,
  getSingleUserIntoDB,
};
