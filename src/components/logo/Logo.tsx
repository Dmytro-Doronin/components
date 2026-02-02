import {Button} from "../ui/button/Button.tsx";
import {NavLink} from "react-router-dom";
import {publicRoutes} from "../../router/routesVariables/pathVariables.ts";
export const Logo = () => {
    return (
            <Button
                as={NavLink}
                to={publicRoutes.home}
                className="
                    font-bold text-[25.2px]
                    leading-[100%]
                    tracking-[-0.14px]
                    text-light-100
                "
                    variant='link'>StudyBridge</Button>
    );
};

