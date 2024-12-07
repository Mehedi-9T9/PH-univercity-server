import { z } from "zod";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const academicSemesterValidationSchema = z.object({
    semesterName: z.enum(["Autumn","Summer","Fall"]),
    semesterCode:z.enum(["01","02","03"]),
    year:z.string(),
    startMonth:z.enum([...months] as [string, ...string[]]),
    endMonth:z.enum([...months] as [string, ...string[]])
  });
  export default academicSemesterValidationSchema
  