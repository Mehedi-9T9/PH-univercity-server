import express  from "express";
import { academicSemesterControllars } from "./academicSemesterControllar";

import academicSemesterValidationSchema from "./academicSemesterValidationSchema";
import requstValidation from "../middleware/requestValidation";
const router =express.Router()

router.post('/create-academic-semester',requstValidation(academicSemesterValidationSchema),academicSemesterControllars.createAcademicSemester)
export const academidSemesterRoutes = router;