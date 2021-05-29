import { useState } from 'react';
import Button from 'components/button';
import InputField from 'components/input-field';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { object, string, SchemaOf } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthWrapper from '../../components/auth-wrapper';
import { AuthContainer, AuthHint, Main, FormContainer, Form } from './style';

export interface IRegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Register = () => {
    const history = useHistory();
    const schema: SchemaOf<IRegisterData> = object().shape({
        firstName: string().required('first name is required'),
        lastName: string().required('last name is required'),
        email: string().required('email is required').email('invalid email address'),
        password: string().required('password is required'),
    });

    const { register, handleSubmit, reset, errors } = useForm<IRegisterData>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        reset();
        history.push('/hello');
    };

    return (
        <AuthWrapper>
            <AuthContainer>
                <AuthHint>
                    Already a member?{' '}
                    <Link to="/login" className="hint-action link">
                        Sign In
                    </Link>
                </AuthHint>
                <Main>
                    <FormContainer>
                        <p className="form-title">Create your account</p>
                        <p className="form-description">A short description about account types</p>

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <InputField
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                name="firstName"
                                label="First Name"
                                errorMessage={errors.firstName?.message}
                                ref={register}
                            />
                            <InputField
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                value={lastName}
                                errorMessage={errors.lastName?.message}
                                onChange={(e) => setLastName(e.target.value)}
                                ref={register}
                            />
                            <InputField
                                id="email"
                                name="email"
                                label="Email address"
                                value={email}
                                errorMessage={errors.email?.message}
                                onChange={(e) => setEmail(e.target.value)}
                                ref={register}
                            />
                            <InputField
                                id="password"
                                name="password"
                                label="Create Password"
                                type="password"
                                value={password}
                                errorMessage={errors.password?.message}
                                onChange={(e) => setPassword(e.target.value)}
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

export default Register;
