import { Router } from 'express';
import { studentRoutes } from '../student/student.router';
import { userRoutes } from '../user/user.router';
import { academidSemesterRoutes } from '../academicSemester/academicSemesterRouter';
import { facultyRoutes } from '../faculty/faculty.router';
import { departmentRoutes } from '../academicDepartment/department.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academicSemester',
    route: academidSemesterRoutes,
  },
  {
    path: '/faculty',
    route: facultyRoutes,
  },
  {
    path: '/department',
    route: departmentRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use('/students',studentRoutes)
// router.use('/users',userRoutes)
export default router;
