import express from 'express';
import { userControllar } from './user.controllar';

import studentValidationSchema from '../student/studentValidationModel';
import requstValidation from '../middleware/requestValidation';

const router = express.Router();

router.post(
  '/create-user',
  requstValidation(studentValidationSchema),
  userControllar.createUser,
);
router.get('/single-user/:userId', userControllar.getSingleUser);

export const userRoutes = router;
