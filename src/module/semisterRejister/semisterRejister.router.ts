import express from 'express'
import { semisterRejisterControllars } from './semisterRejister.controllar'
const router =express.Router()

router.post('/create-semister-Rejister',semisterRejisterControllars.createSemisterRejister)
router.get('/',semisterRejisterControllars.getAllSemisterRejister)
router.get('/:id',semisterRejisterControllars.getSingleSemisterRejister)
router.patch('/:id',semisterRejisterControllars.updateSemisterRejister)
export const semisterRejisterRoutes =router