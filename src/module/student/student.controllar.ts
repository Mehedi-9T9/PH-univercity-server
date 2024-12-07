import { RequestHandler } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../utility/sendResponse';

const getAllStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await studentServices.getAllStudentInToDB();
    sendResponse(res, {
      statusCode: 200,
      message: 'Get All Student Data',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getSingleStudentInToDB(id);
    sendResponse(res, {
      statusCode: 200,
      message: 'Get Single Student Data',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const studentControllar = {
  getAllStudent,
  getSingleStudent,
};
