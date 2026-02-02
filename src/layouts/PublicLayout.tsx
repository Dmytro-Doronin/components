import { Outlet } from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";

export const PublicLayout = () => {
    return (
        <>
            <Header/>
            <main className="pt-[var(--header-height)]">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};