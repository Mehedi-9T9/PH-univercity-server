import { z } from "zod";
const facultyValidatioSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email:z.string()
    
  });
  export default facultyValidatioSchema