"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyModel = void 0;
const mongoose_1 = require("mongoose");
const facultySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, { timestamps: true });
exports.facultyModel = (0, mongoose_1.model)('Faculty', facultySchema);
