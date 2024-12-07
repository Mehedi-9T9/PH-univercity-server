

import { Tstudent } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { Tuser } from './user.interface';

import { userModel } from './user.model';
import { genaretID } from './user.studentId.genaret';

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

  const createdUser = await userModel.create(userData);

  if (Object.keys(createdUser).length) {
    studentData.studentId = createdUser.studentId;
    studentData.userId = createdUser._id;

    const createdStudent = await studentModel.create(studentData);
    return createdStudent;
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
