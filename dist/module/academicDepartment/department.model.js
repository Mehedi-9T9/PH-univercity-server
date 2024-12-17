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
exports.DepartmentModel = void 0;
const mongoose_1 = require("mongoose");
const departmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    facultyId: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'Faculty' },
    confirm: { type: Boolean, required: true }
});
class AppError extends Error {
    constructor(statusCode, message, stack = '') {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
departmentSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isExists = yield exports.DepartmentModel.findOne({ name: this.name });
        if (isExists) {
            throw new Error("Department already Exists");
        }
        next();
    });
});
departmentSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const quary = this.getQuery();
        const isExists = yield exports.DepartmentModel.findOne(quary);
        if (!isExists) {
            throw new AppError(404, "Department does not change");
        }
        next();
    });
});
exports.DepartmentModel = (0, mongoose_1.model)('Department', departmentSchema);
