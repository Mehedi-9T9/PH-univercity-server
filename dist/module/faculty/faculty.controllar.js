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
exports.facultyControllars = void 0;
const catchAsync_1 = __importDefault(require("../utility/catchAsync"));
const sendResponse_1 = __importDefault(require("../utility/sendResponse"));
const faculty_service_1 = require("./faculty.service");
const createFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const facultyInfo = req.body;
    const result = yield faculty_service_1.facultyServices.createFacultyIntoDB(facultyInfo);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "faculty created successfull", data: result });
}));
const getSingleFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const result = yield faculty_service_1.facultyServices.getSingleFacultyIntoDB(facultyId);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "faculty created successfull", data: result });
}));
const updateFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const facultyInfo = req.body;
    const { facultyId } = req.params;
    const result = yield faculty_service_1.facultyServices.updateFacultyIntoDB(facultyInfo, facultyId);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "Get single data successfull", data: result });
}));
exports.facultyControllars = {
    createFaculty,
    getSingleFaculty,
    updateFaculty
};
