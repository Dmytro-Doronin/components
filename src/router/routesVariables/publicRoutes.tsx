import type {RouteObject} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {TeachersPage} from "../../pages/teachersPage/TeachersPage.tsx";

export const publicRoutes: RouteObject[] = [
    { index: true, element: <Home /> },
    { path: "/teachers", element: <TeachersPage /> },
];