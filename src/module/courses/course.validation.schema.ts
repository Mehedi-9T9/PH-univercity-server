import { z } from "zod";


const preRequisitCourse = z.object({
    course: z.string().optional(),
    isDeleted: z.boolean().optional()
})
export const courseValidationSchema = z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    creadits: z.number(),
    preRequisitCourse: z.array(preRequisitCourse).optional(),
    isDeleted: z.boolean().optional()
})