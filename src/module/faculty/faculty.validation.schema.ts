import { z } from "zod";
const facultyValidatioSchema = z.object({
    name: z.string(),
    
  });
  export default facultyValidatioSchema