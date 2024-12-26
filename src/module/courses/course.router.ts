import express from 'express'
import { coursesCotrollars } from './cours.controllar'
import requstValidation from '../middleware/requestValidation'
import { courseValidationSchema } from './course.validation.schema'
const router = express.Router()


router.delete('/:id', coursesCotrollars.deleteCourse)
router.post('/create-course', requstValidation(courseValidationSchema), coursesCotrollars.createCourse)
router.get('/', coursesCotrollars.getAllCourse)
router.get('/:id', coursesCotrollars.getSingleCourse)
router.patch('/:id', coursesCotrollars.updateCourse)

export const courseRouter = router