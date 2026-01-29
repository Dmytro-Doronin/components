import {LoginForm} from "../../components/auth/loginForm/LoginForm.tsx";

export type loginData = {
    email: string,
    password: string,
}

export const LoginPage = () => {


    const onSubmit = (data: loginData) => {
        console.log(data)
    }

    return (
        <div
            className='auth-page'
        >
            <LoginForm loading={false} onSubmit={onSubmit} title='Login' />
        </div>
    );
};

