"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
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
const academicSemesterValidationSchema = zod_1.z.object({
    semesterName: zod_1.z.enum(["Autumn", "Summer", "Fall"]),
    semesterCode: zod_1.z.enum(["01", "02", "03"]),
    year: zod_1.z.string(),
    startMonth: zod_1.z.enum([...months]),
    endMonth: zod_1.z.enum([...months])
});
exports.default = academicSemesterValidationSchema;
