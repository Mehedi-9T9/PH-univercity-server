
import { userServices } from './user.service';
import sendResponse from '../utility/sendResponse';
import catchAsync from '../utility/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const result = await userServices.createUserIntoDB(userData);

  sendResponse(res, {
    statusCode: 200,
    message: 'Student Create Successfull',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.getSingleUserIntoDB(userId);
  sendResponse(res, {
    statusCode: 200,
    message: 'Get Single Student successfull',
    data: result,
  });
});
export const userControllar = {
  createUser,
  getSingleUser,
};
