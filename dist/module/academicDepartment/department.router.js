"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const department_controllar_1 = require("./department.controllar");
const router = express_1.default.Router();
//router.post('/create-department',requstValidation(departmentValidationSchema),departmentControllars.createDepartment)
router.post('/create-department', department_controllar_1.departmentControllars.createDepartment);
router.patch('/update-department/:departmentId', department_controllar_1.departmentControllars.updateDepartment);
router.get('/', department_controllar_1.departmentControllars.getDepartment);
router.get('/:departmentId', department_controllar_1.departmentControllars.getSingleDepartment);
exports.departmentRoutes = router;
