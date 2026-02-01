import {Outlet} from "react-router-dom";

export const PrivateLayout = () => {
    return (
        <>
            <div>Private header</div>
            <main className="pt-[var(--header-height)] pb-[200px]">
                <Outlet/>
            </main>
            <div>Private footer</div>
        </>
    );
};