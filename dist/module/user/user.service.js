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
exports.userServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const user_studentId_genaret_1 = require("./user.studentId.genaret");
const student_model_1 = require("../student/student.model");
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
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const createdUser = yield user_model_1.userModel.create([userData], { session });
        if (!createdUser.length) {
            throw new Error("user create fail");
        }
        studentData.studentId = createdUser[0].studentId;
        studentData.userId = createdUser[0]._id;
        const createdStudent = yield student_model_1.studentModel.create([studentData], { session });
        if (!createdStudent.length) {
            throw new Error("user create fail");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return createdStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
    finally {
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
