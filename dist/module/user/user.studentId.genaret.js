"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genaretID = void 0;
const academicSemesterModel_1 = require("../academicSemester/academicSemesterModel");
const user_model_1 = require("./user.model");
const lastDigit = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudentId = yield user_model_1.userModel.findOne({ role: 'student' }, { studentId: 1, _id: 0 }).sort({ createdAt: -1 });
    const studentId = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.studentId;
    return studentId;
});
const genaretID = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastStudentID = yield lastDigit();
    const lastSemesterCode = lastStudentID === null || lastStudentID === void 0 ? void 0 : lastStudentID.toString().substring(4, 6);
    const lastSemesterYear = lastStudentID === null || lastStudentID === void 0 ? void 0 : lastStudentID.toString().substring(0, 4);
    const semesterInfo = yield academicSemesterModel_1.AcademicSemesterModel.findById({ _id: studentData.admissionSemester });
    const currentLastSemesterYear = semesterInfo === null || semesterInfo === void 0 ? void 0 : semesterInfo.year;
    const currentLastSemesterCode = semesterInfo === null || semesterInfo === void 0 ? void 0 : semesterInfo.semesterCode;
    if (lastStudentID && lastSemesterYear === currentLastSemesterYear && lastSemesterCode === currentLastSemesterCode) {
        currentId = lastStudentID.toString().substring(6);
    }
    const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    const genaretId = `${semesterInfo === null || semesterInfo === void 0 ? void 0 : semesterInfo.year}${semesterInfo === null || semesterInfo === void 0 ? void 0 : semesterInfo.semesterCode}${incrementId}`;
    return genaretId;
});
exports.genaretID = genaretID;
