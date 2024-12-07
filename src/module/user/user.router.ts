import express from 'express';
import { userControllar } from './user.controllar';

import studentValidationSchema from '../student/studentValidationModel';
import { requestValidations } from '../middleware/requestValidation';
const router = express.Router();

router.post(
  '/create-user',
  requestValidations.requstValidationSchema(studentValidationSchema),
  userControllar.createUser,
);
router.get('/single-user/:userId', userControllar.getSingleUser);

export const userRoutes = router;
