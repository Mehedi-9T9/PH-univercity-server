"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidationUpdateSchema = exports.studentValidationSchema = void 0;
const zod_1 = require("zod");
// Name স্কিমা
const nameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'First name is required'),
    lastName: zod_1.z.string().min(1, 'Last name is required'),
});
// Contact স্কিমা
const contactSchema = zod_1.z.object({
    phone: zod_1.z.string().min(1, 'Phone number is required'),
    whatsApp: zod_1.z.string().min(1, 'WhatsApp number is required'),
    imo: zod_1.z.string().min(1, 'IMO number is required'),
});
// Address স্কিমা
const addressSchema = zod_1.z.object({
    distric: zod_1.z.string().min(1, 'District is required'),
    division: zod_1.z.string().min(1, 'Division is required'),
    city: zod_1.z.string().min(1, 'City is required'),
});
// Gardian স্কিমা
const gardianSchema = zod_1.z.object({
    father: zod_1.z.string().min(1, "Father's name is required"),
    mother: zod_1.z.string().min(1, "Mother's name is required"),
});
// Student মূল স্কিমা
exports.studentValidationSchema = zod_1.z.object({
    name: nameSchema,
    email: zod_1.z.string().email('Invalid email address'),
    studentId: zod_1.z.string().optional(), //.min(1, "Student ID is required"),
    userId: zod_1.z.string().optional(), //.min(1, "User ID is required"), 
    isDelete: zod_1.z.boolean(),
    admissionSemester: zod_1.z.string(),
    contact: contactSchema,
    address: addressSchema,
    gardian: gardianSchema,
});
const nameUpdateSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, 'First name is required').optional(),
    lastName: zod_1.z.string().min(1, 'Last name is required').optional(),
});
// Contact স্কিমা
const contactUpdateSchema = zod_1.z.object({
    phone: zod_1.z.string().min(1, 'Phone number is required').optional(),
    whatsApp: zod_1.z.string().min(1, 'WhatsApp number is required').optional(),
    imo: zod_1.z.string().min(1, 'IMO number is required').optional(),
});
// Address স্কিমা
const addressUpdateSchema = zod_1.z.object({
    distric: zod_1.z.string().min(1, 'District is required').optional(),
    division: zod_1.z.string().min(1, 'Division is required').optional(),
    city: zod_1.z.string().min(1, 'City is required').optional(),
});
// Gardian স্কিমা
const gardianUpdateSchema = zod_1.z.object({
    father: zod_1.z.string().min(1, "Father's name is required").optional(),
    mother: zod_1.z.string().min(1, "Mother's name is required").optional(),
});
exports.studentValidationUpdateSchema = zod_1.z.object({
    name: nameUpdateSchema,
    email: zod_1.z.string().email('Invalid email address').optional(),
    studentId: zod_1.z.string().optional(), //.min(1, "Student ID is required"),
    userId: zod_1.z.string().optional(), //.min(1, "User ID is required"), 
    isDelete: zod_1.z.boolean().optional(),
    admissionSemester: zod_1.z.string().optional(),
    contact: contactUpdateSchema,
    address: addressUpdateSchema,
    gardian: gardianUpdateSchema,
});
