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
exports.userServices = void 0;
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const user_studentId_genaret_1 = require("./user.studentId.genaret");
const createUserIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = 'mehedi200';
    userData.studentId = yield (0, user_studentId_genaret_1.genaretID)(studentData);
    // userData.studentId = "2025020001";
    userData.role = 'student';
    //custom instance methods
    // const users = new userModel(userData)
    // if(await users.isExists("ms1122")){
    //     throw new Error("user Already exists")
    // }
    // const createdUser= await users.save()
    //custom statics instance methods
    if (yield user_model_1.userModel.isExists(userData.studentId)) {
        throw new Error('user Already exists');
    }
    const createdUser = yield user_model_1.userModel.create(userData);
    if (Object.keys(createdUser).length) {
        studentData.studentId = createdUser.studentId;
        studentData.userId = createdUser._id;
        const createdStudent = yield student_model_1.studentModel.create(studentData);
        return createdStudent;
    }
});
const getSingleUserIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleUser = yield user_model_1.userModel.findOne({ _id: id });
    return singleUser;
});
exports.userServices = {
    createUserIntoDB,
    getSingleUserIntoDB,
};
