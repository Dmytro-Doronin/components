import {SignUpForm} from "../../components/auth/signUpForm/SignUpForm.tsx";

export type SignUpData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const SignUpPage = () => {


    const onSubmit = (data: SignUpData) => {
        console.log(data)
    }

    return (
        <div
            className='auth-page'
        >
            <SignUpForm loading={false} onSubmit={onSubmit} title='SIGN UP' />
        </div>
    );
};

