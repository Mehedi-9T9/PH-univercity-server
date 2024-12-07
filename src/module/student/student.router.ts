import express from 'express';
import { studentControllar } from './student.controllar';
const router = express.Router();

router.get('/get-all-students', studentControllar.getAllStudent);
router.get('/get-single-student/:id', studentControllar.getSingleStudent);

export const studentRoutes = router;
