import {Navigate, type RouteObject} from "react-router-dom";

export const privateRoutes: RouteObject[] = [
    { index: true, element: <Navigate to="/dashboard" replace /> },
    { path: "/dashboard/:id", element: <div>Dashboard</div> },
    { path: "/teachers-private", element: <div>Teachers</div> },
];