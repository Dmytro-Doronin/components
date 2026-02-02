import {Header} from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";

export const AuthLayout = () => {
    return (
        <>
            <Header/>
            <main className="pt-[var(--header-height)]">
                <Outlet/>
            </main>
        </>
    );
};