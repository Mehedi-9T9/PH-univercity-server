"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const facultyValidatioSchema = zod_1.z.object({
    name: zod_1.z.string(),
});
exports.default = facultyValidatioSchema;
