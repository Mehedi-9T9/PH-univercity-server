import express  from "express";
import { academicSemesterControllars } from "./academicSemesterControllar";
import { requestValidations } from "../middleware/requestValidation";
import academicSemesterValidationSchema from "./academicSemesterValidationSchema";
const router =express.Router()

router.post('/create-academic-semester',requestValidations.requstValidationSchema(academicSemesterValidationSchema),academicSemesterControllars.createAcademicSemester)
export const academidSemesterRoutes = router;