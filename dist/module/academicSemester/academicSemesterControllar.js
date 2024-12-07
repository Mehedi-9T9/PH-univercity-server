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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterControllars = void 0;
const academicSemesterServices_1 = require("./academicSemesterServices");
const sendResponse_1 = __importDefault(require("../utility/sendResponse"));
const catchAsync_1 = __importDefault(require("../utility/catchAsync"));
const createAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const academicSemesterInfo = req.body;
    const result = yield academicSemesterServices_1.academicSemesterServices.createAcademicSemesterIntoDB(academicSemesterInfo);
    (0, sendResponse_1.default)(res, { message: "semester create successfull", statusCode: 200, data: result });
}));
exports.academicSemesterControllars = {
    createAcademicSemester
};
