"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const faculty_controllar_1 = require("./faculty.controllar");
const faculty_validation_schema_1 = __importDefault(require("./faculty.validation.schema"));
const requestValidation_1 = __importDefault(require("../middleware/requestValidation"));
const router = express_1.default.Router();
router.post('/create-faculty', (0, requestValidation_1.default)(faculty_validation_schema_1.default), faculty_controllar_1.facultyControllars.createFaculty);
router.patch('/update-faculty/:facultyId', (0, requestValidation_1.default)(faculty_validation_schema_1.default), faculty_controllar_1.facultyControllars.updateFaculty);
router.get('/:facultyId', faculty_controllar_1.facultyControllars.getSingleFaculty);
exports.facultyRoutes = router;
