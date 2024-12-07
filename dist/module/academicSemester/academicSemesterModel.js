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
exports.AcademicSemesterModel = void 0;
const mongoose_1 = require("mongoose");
const academicSemesterAllConst_1 = require("./academicSemesterAllConst");
const academicSemester = new mongoose_1.Schema({
    semesterName: { type: String, required: true, enum: ["Autumn", "Summer", "Fall"] },
    semesterCode: { type: String, required: true, enum: ["01", "02", "03"] },
    year: { type: String, required: true },
    startMonth: { type: String,
        enum: academicSemesterAllConst_1.months,
        required: true
    },
    endMonth: { type: String,
        enum: academicSemesterAllConst_1.months,
        required: true
    },
});
academicSemester.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isExistsSemester = yield exports.AcademicSemesterModel.findOne({ semesterName: this.semesterName, year: this.year });
        if (isExistsSemester) {
            throw new Error("The semister already exists");
        }
        next();
    });
});
exports.AcademicSemesterModel = (0, mongoose_1.model)('AcademicSemester', academicSemester);
