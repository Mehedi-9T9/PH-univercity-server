
import { studentModel } from './student.model';

const getAllStudentInToDB = async () => {
  const result = await studentModel.find();
  return result;
};
const getSingleStudentInToDB = async (id: string) => {
  const result = await studentModel.findOne({ studentId: id });
  return result;
};
export const studentServices = {
  getAllStudentInToDB,
  getSingleStudentInToDB,
};
