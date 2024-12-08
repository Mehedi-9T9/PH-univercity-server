import express from 'express'
import { facultyControllars } from './faculty.controllar'

import facultyValidatioSchema from './faculty.validation.schema'
import requstValidation from '../middleware/requestValidation'
const router =express.Router()

router.post('/create-faculty',requstValidation(facultyValidatioSchema),facultyControllars.createFaculty)
router.patch('/update-faculty/:facultyId',requstValidation(facultyValidatioSchema),facultyControllars.updateFaculty)
export const facultyRoutes=router