import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "../layouts/RootLayout.tsx";
import {PublicLayout} from "../layouts/PublicLayout.tsx";
import {RequireAuth} from "./RequireAuth.tsx";
import {PrivateLayout} from "../layouts/PrivadeLayout.tsx";
import {AuthLayout} from "../layouts/AuthLayout.tsx";
import {publicRoutes} from "./routesVariables/publicRoutes.tsx";
import {authRoutes} from "./routesVariables/authRoutes.tsx";
import {privateRoutes} from "./routesVariables/privateRoutes.tsx";

export const router = createBrowserRouter([
    {
        element: (
           <RootLayout />
        ),
        errorElement: <div>Page not found</div>,
        children: [
            {
                element: <AuthLayout />,
                children: [...authRoutes],
            },
            {
                element: <PublicLayout />,
                children: [...publicRoutes],
            },
            {
                element: (
                    <RequireAuth>
                        <PrivateLayout />
                    </RequireAuth>
                ),
                children: [...privateRoutes],
            },
        ],
    },
]);