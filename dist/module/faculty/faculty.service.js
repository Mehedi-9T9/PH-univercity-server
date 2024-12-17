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
exports.facultyServices = void 0;
const faculty_model_1 = require("./faculty.model");
const createFacultyIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faculty_model_1.facultyModel.create(payload);
    return result;
});
const updateFacultyIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faculty_model_1.facultyModel.findByIdAndUpdate({ _id: id }, { name: payload.name }, { new: true });
    return result;
});
const getSingleFacultyIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield faculty_model_1.facultyModel.findOne({ _id: id });
    return result;
});
exports.facultyServices = {
    createFacultyIntoDB,
    getSingleFacultyIntoDB,
    updateFacultyIntoDB
};
