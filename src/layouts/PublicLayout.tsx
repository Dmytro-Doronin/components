import { Outlet } from "react-router-dom";
import {Header} from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";

export const PublicLayout = () => {
    return (
        <>
            <Header/>
            {/*pt-[var(--header-height)]*/}
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};