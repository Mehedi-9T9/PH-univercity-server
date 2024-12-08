"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controllar_1 = require("./user.controllar");
const studentValidationModel_1 = __importDefault(require("../student/studentValidationModel"));
const requestValidation_1 = __importDefault(require("../middleware/requestValidation"));
const router = express_1.default.Router();
router.post('/create-user', (0, requestValidation_1.default)(studentValidationModel_1.default), user_controllar_1.userControllar.createUser);
router.get('/single-user/:userId', user_controllar_1.userControllar.getSingleUser);
exports.userRoutes = router;
