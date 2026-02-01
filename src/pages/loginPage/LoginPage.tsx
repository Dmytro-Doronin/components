import {LoginForm} from "../../components/auth/loginForm/LoginForm.tsx";
import type {Role} from "../../components/auth/types.ts";

export type loginData = {
    email: string,
    password: string,
}

export const LoginPage = ({role}: {role: Role}) => {


    const onSubmit = (data: loginData & {role: Role}) => {
        console.log(data)
    }

    return (
        <div
            className='auth-page'
        >
            <LoginForm loading={false} onSubmit={onSubmit} title={role === 'tutor' ? 'LOGIN AS A TUTOR': 'LOGIN'} role={role} />
        </div>
    );
};

