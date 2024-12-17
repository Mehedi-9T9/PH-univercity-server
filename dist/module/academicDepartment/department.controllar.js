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
exports.departmentControllars = void 0;
const catchAsync_1 = __importDefault(require("../utility/catchAsync"));
const sendResponse_1 = __importDefault(require("../utility/sendResponse"));
const department_service_1 = require("./department.service");
const createDepartment = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const departmentInfo = req.body;
    const result = yield department_service_1.departmentServices.createDepartmentIntoDB(departmentInfo);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "Department create Successfull", data: result });
}));
const getDepartment = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_service_1.departmentServices.getDepartmentIntoDB();
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "All Department Data", data: result });
}));
const getSingleDepartment = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { departmentId } = req.params;
    const result = yield department_service_1.departmentServices.getSingleDepartmentIntoDB(departmentId);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "All Department Data", data: result });
}));
const updateDepartment = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const departmentInfo = req.body;
    const { departmentId } = req.params;
    const result = yield department_service_1.departmentServices.updateDepartmentIntoDB(departmentInfo, departmentId);
    (0, sendResponse_1.default)(res, { statusCode: 200, message: "Department update Successfull", data: result });
}));
exports.departmentControllars = {
    createDepartment,
    getDepartment,
    getSingleDepartment,
    updateDepartment
};
