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
exports.studentControllar = void 0;
const student_service_1 = require("./student.service");
const sendResponse_1 = __importDefault(require("../utility/sendResponse"));
const getAllStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentServices.getAllStudentInToDB();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Get All Student Data',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield student_service_1.studentServices.getSingleStudentInToDB(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'Get Single Student Data',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.studentControllar = {
    getAllStudent,
    getSingleStudent,
};
