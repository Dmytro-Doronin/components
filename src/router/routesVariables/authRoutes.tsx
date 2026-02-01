import type {RouteObject} from "react-router-dom";
import {LoginPage} from "../../pages/loginPage/LoginPage.tsx";
import {SignUpPage} from "../../pages/signUpPage/SignUpPage.tsx";
import {RecoveryPage} from "../../pages/recoveryPage/RecoveryPage.tsx";

export const authRoutes: RouteObject[] = [
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <SignUpPage /> },
    { path: "/recovery", element: <RecoveryPage /> },
];