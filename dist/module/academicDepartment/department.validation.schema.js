"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentValidationSchema = void 0;
const zod_1 = require("zod");
exports.departmentValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "name is Required"),
    facultyId: zod_1.z.string(),
});
