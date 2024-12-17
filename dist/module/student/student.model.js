"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = require("mongoose");
const nameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
}, { _id: false });
const contactShema = new mongoose_1.Schema({
    phone: { type: String, required: true },
    whatsApp: { type: String, required: true },
    imo: { type: String, required: true },
}, { _id: false });
const addressSchema = new mongoose_1.Schema({
    distric: { type: String, required: true },
    division: { type: String, required: true },
    city: { type: String, required: true },
}, { _id: false });
const gardianSchema = new mongoose_1.Schema({
    father: { type: String, required: true },
    mother: { type: String, required: true },
}, { _id: false });
const studentSchema = new mongoose_1.Schema({
    // _id:{type:Schema.ObjectId},
    name: nameSchema,
    email: { type: String, required: true },
    studentId: { type: String, required: true },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        unique: true,
        ref: 'User',
    },
    isDelete: { type: Boolean, default: false },
    admissionSemester: { type: mongoose_1.Schema.Types.ObjectId, ref: 'AcademicSemester', required: true },
    contact: contactShema,
    address: addressSchema,
    gardian: gardianSchema,
});
exports.studentModel = (0, mongoose_1.model)('student', studentSchema);
