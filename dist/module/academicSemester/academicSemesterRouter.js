"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academidSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemesterControllar_1 = require("./academicSemesterControllar");
const requestValidation_1 = require("../middleware/requestValidation");
const academicSemesterValidationSchema_1 = __importDefault(require("./academicSemesterValidationSchema"));
const router = express_1.default.Router();
router.post('/create-academic-semester', requestValidation_1.requestValidations.requstValidationSchema(academicSemesterValidationSchema_1.default), academicSemesterControllar_1.academicSemesterControllars.createAcademicSemester);
exports.academidSemesterRoutes = router;
