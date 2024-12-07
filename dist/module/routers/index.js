"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_router_1 = require("../student/student.router");
const user_router_1 = require("../user/user.router");
const academicSemesterRouter_1 = require("../academicSemester/academicSemesterRouter");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/students',
        route: student_router_1.studentRoutes,
    },
    {
        path: '/users',
        route: user_router_1.userRoutes,
    },
    {
        path: '/academicSemester',
        route: academicSemesterRouter_1.academidSemesterRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
// router.use('/students',studentRoutes)
// router.use('/users',userRoutes)
exports.default = router;
