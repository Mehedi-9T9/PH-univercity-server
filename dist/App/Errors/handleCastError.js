"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const errorResponse = [{
            path: err === null || err === void 0 ? void 0 : err.path,
            message: err.message
        }];
    const statusCode = 400;
    return {
        statusCode,
        message: "Invalid ID",
        errorSources: errorResponse
    };
};
exports.default = handleCastError;
