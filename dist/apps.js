"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandelar_1 = __importDefault(require("./module/middleware/globalErrorHandelar"));
const notFound_1 = __importDefault(require("./module/middleware/notFound"));
const routers_1 = __importDefault(require("./module/routers"));
const app = (0, express_1.default)();
//perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use('/api/v1', routers_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(globalErrorHandelar_1.default);
//route not found
app.use(notFound_1.default);
exports.default = app;
