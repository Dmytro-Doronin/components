import type {RouteObject} from "react-router-dom";
import {LoginPage} from "../../pages/loginPage/LoginPage.tsx";
import {SignUpPage} from "../../pages/signUpPage/SignUpPage.tsx";
import {RecoveryPage} from "../../pages/recoveryPage/RecoveryPage.tsx";

export const authRoutes: RouteObject[] = [
    { path: "/login/student", element: <LoginPage role="student" /> },
    { path: "/login/tutor", element: <LoginPage role="tutor" /> },

    { path: "/register/student", element: <SignUpPage role="student" /> },
    { path: "/register/tutor", element: <SignUpPage role="tutor" /> },

    { path: "/recovery", element: <RecoveryPage /> },
];