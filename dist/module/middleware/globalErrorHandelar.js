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
const zod_1 = require("zod");
const handleZodError_1 = __importDefault(require("../../App/Errors/handleZodError"));
const handleMongooseError_1 = __importDefault(require("../../App/Errors/handleMongooseError"));
const config_1 = __importDefault(require("../../config"));
const handleCastError_1 = __importDefault(require("../../App/Errors/handleCastError"));
const globalErrorHandle = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //default error values
    let statusCode = err.statusCode || 500;
    let message = (err === null || err === void 0 ? void 0 : err.message) || "something went wrong";
    let errorSources = [
        { path: '', message: '' }
    ];
    if (err instanceof zod_1.ZodError) {
        const getError = (0, handleZodError_1.default)(err);
        statusCode = getError.statusCode;
        message = getError.message;
        errorSources = getError.errorSources;
    }
    //Todo !!!!
    else if (err.name === "ValidationError") {
        const simplifyError = (0, handleMongooseError_1.default)(err);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
        errorSources = simplifyError.errorSources;
    }
    else if (err.name === "CastError") {
        const simplifyError = (0, handleCastError_1.default)(err);
        statusCode = simplifyError.statusCode;
        message = simplifyError.message;
        errorSources = simplifyError.errorSources;
    }
    res.status(statusCode).json({
        status: false,
        message,
        errorSources,
        // err,
        stack: config_1.default.NODE_ENV === "development" ? err === null || err === void 0 ? void 0 : err.stack : null
    });
});
exports.default = globalErrorHandle;
