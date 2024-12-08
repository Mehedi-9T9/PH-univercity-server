import express from 'express'
import { departmentControllars } from './department.controllar'
const router =express.Router()

router.post('/create-department',departmentControllars.createDepartment)
router.patch('/update-department/:departmentId',departmentControllars.updateDepartment)

export const departmentRoutes=router