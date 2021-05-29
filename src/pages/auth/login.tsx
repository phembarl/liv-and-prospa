import Button from 'components/button';
import InputField from 'components/input-field';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string, SchemaOf } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthWrapper from '../../components/auth-wrapper';
import { AuthContainer, AuthHint, Main, FormContainer, Form } from './style';

export interface ILoginData {
    email: string;
    password: string;
}

const Login = () => {
    const history = useHistory();

    const schema: SchemaOf<ILoginData> = object().shape({
        email: string().required('email is required').email('invalid email address'),
        password: string().required('password is required'),
    });

    const { register, handleSubmit, reset, errors } = useForm<ILoginData>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        reset();
        history.push('/dashboard');
    };

    return (
        <AuthWrapper sideBarVariant="secondary">
            <AuthContainer>
                <AuthHint>
                    Don&lsquo;t have an account?{' '}
                    <Link to="/" className="hint-action link">
                        Sign Up
                    </Link>
                </AuthHint>
                <Main>
                    <FormContainer>
                        <p className="form-title">Welcome back to Prospa</p>
                        <p className="form-description">
                            An account, with powerful, personalised tools all in one place
                        </p>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <InputField
                                label="Email address"
                                value={email}
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                errorMessage={errors.email?.message}
                                ref={register}
                            />
                            <InputField
                                type="password"
                                id="password"
                                name="password"
                                label="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                errorMessage={errors.password?.message}
                                ref={register}
                            />
                            <Button text="Next" submit />
                        </Form>
                    </FormContainer>
                </Main>
            </AuthContainer>
        </AuthWrapper>
    );
};

export default Login;
