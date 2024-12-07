import { z } from 'zod';

// Name স্কিমা
const nameSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

// Contact স্কিমা
const contactSchema = z.object({
  phone: z.string().min(1, 'Phone number is required'),
  whatsApp: z.string().min(1, 'WhatsApp number is required'),
  imo: z.string().min(1, 'IMO number is required'),
});

// Address স্কিমা
const addressSchema = z.object({
  distric: z.string().min(1, 'District is required'),
  division: z.string().min(1, 'Division is required'),
  city: z.string().min(1, 'City is required'),
});

// Gardian স্কিমা
const gardianSchema = z.object({
  father: z.string().min(1, "Father's name is required"),
  mother: z.string().min(1, "Mother's name is required"),
});

// Student মূল স্কিমা
const studentValidationSchema = z.object({
  name: nameSchema,
  email: z.string().email('Invalid email address'),
  studentId: z.string().optional(), //.min(1, "Student ID is required"),
  userId: z.string().optional(), //.min(1, "User ID is required"), // ObjectId হিসেবে চেক করতে চাইলে একটি কাস্টম চেক ব্যবহার করা যেতে পারে।
  admissionSemester:z.string(),
  contact: contactSchema,
  address: addressSchema,
  gardian: gardianSchema,
});

export default studentValidationSchema;
