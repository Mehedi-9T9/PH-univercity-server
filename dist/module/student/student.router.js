"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controllar_1 = require("./student.controllar");
const router = express_1.default.Router();
router.get('/get-all-students', student_controllar_1.studentControllar.getAllStudent);
router.get('/get-single-student/:id', student_controllar_1.studentControllar.getSingleStudent);
exports.studentRoutes = router;
