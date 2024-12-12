import { z } from "zod";
export const departmentValidationSchema = z.object({
    name: z.string().min(1,"name is Required"),
    facultyId: z.string(),
  });
  