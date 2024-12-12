import express from 'express';
import { userControllar } from './user.controllar';


import requstValidation from '../middleware/requestValidation';
import { studentValidationSchema } from '../student/studentValidationModel';

const router = express.Router();

router.post(
  '/create-user',
  requstValidation(studentValidationSchema),
  userControllar.createUser,
);
router.get('/single-user/:userId', userControllar.getSingleUser);

export const userRoutes = router;
