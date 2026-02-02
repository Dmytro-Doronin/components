import type {RouteObject} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {TeachersPage} from "../../pages/teachersPage/TeachersPage.tsx";
import {TeacherDetail} from "../../pages/teacherDetail/teacherDetail.tsx";

export const publicRoutes: RouteObject[] = [
    { index: true, element: <Home /> },
    { path: "/teachers", element: <TeachersPage /> },
    { path: "/teacher", element: <TeacherDetail /> },
];