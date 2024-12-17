"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err) => {
    const errorResponse = err.issues.map((issu) => {
        return {
            path: issu.path[issu.path.length - 1],
            message: issu.message
        };
    });
    const statusCode = 400;
    const message = "Validation Error";
    return {
        statusCode,
        message,
        errorSources: errorResponse
    };
};
exports.default = handleZodError;
