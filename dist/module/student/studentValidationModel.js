"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const studentValidationSchema = zod_1.z.object({
    name: nameSchema,
    email: zod_1.z.string().email('Invalid email address'),
    studentId: zod_1.z.string().optional(), //.min(1, "Student ID is required"),
    userId: zod_1.z.string().optional(), //.min(1, "User ID is required"), // ObjectId হিসেবে চেক করতে চাইলে একটি কাস্টম চেক ব্যবহার করা যেতে পারে।
    admissionSemester: zod_1.z.string(),
    contact: contactSchema,
    address: addressSchema,
    gardian: gardianSchema,
});
exports.default = studentValidationSchema;
