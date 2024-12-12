import express from 'express'
import { departmentControllars } from './department.controllar'
import requstValidation from '../middleware/requestValidation'
import { departmentValidationSchema } from './department.validation.schema'
const router =express.Router()

//router.post('/create-department',requstValidation(departmentValidationSchema),departmentControllars.createDepartment)
router.post('/create-department',departmentControllars.createDepartment)
router.patch('/update-department/:departmentId',departmentControllars.updateDepartment)
router.get('/',departmentControllars.getDepartment)
router.get('/:departmentId',departmentControllars.getSingleDepartment)

export const departmentRoutes=router