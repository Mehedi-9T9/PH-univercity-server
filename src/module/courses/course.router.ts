import express from 'express'
import { coursesCotrollars } from './cours.controllar'
const router =express.Router()

router.post('/create-course',coursesCotrollars.createCourse)
router.get('/',coursesCotrollars.getAllCourse)
export const courseRouter =router