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
exports.academicSemesterServices = void 0;
const academicSemesterAllConst_1 = require("./academicSemesterAllConst");
const academicSemesterModel_1 = require("./academicSemesterModel");
const createAcademicSemesterIntoDB = (academicSemesterData) => __awaiter(void 0, void 0, void 0, function* () {
    if (academicSemesterAllConst_1.semesterCodeMapping[academicSemesterData.semesterName] !== academicSemesterData.semesterCode) {
        throw new Error('Invalid Semester Code');
    }
    const result = yield academicSemesterModel_1.AcademicSemesterModel.create(academicSemesterData);
    return result;
});
exports.academicSemesterServices = {
    createAcademicSemesterIntoDB,
};
