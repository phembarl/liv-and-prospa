import React, { useState } from 'react';
import Button from 'components/button';
import { Link, useHistory } from 'react-router-dom';
import RadioOption from 'components/radio-option';
import ListItem from 'components/list-item';
import AuthWrapper from '../../components/auth-wrapper';
import { AuthContainer, AuthHint, Main, FormContainer, Form } from './style';

const NewBusiness = () => {
    const [userStatus, setUserStatus] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const checkStatus = () => {
        if (!userStatus) {
            setError('please select an option');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (checkStatus()) {
            history.push('/dashboard');
        }
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
                        <p className="form-title">Open a new business account</p>
                        <p className="form-description">
                            A short description about opening a new business account
                        </p>

                        <Form onSubmit={handleSubmit}>
                            <RadioOption
                                value="registered-cac"
                                htmlFor="registered-cac"
                                id="registered-cac"
                                text="I have a registered business /
                                charity with CAC"
                                name="userStatus"
                                checked={userStatus === 'registered-cac'}
                                onChange={(e) => setUserStatus(e.target.value)}
                            >
                                <div className="option-description">
                                    As a registered business you’ll get:
                                </div>
                                <>
                                    <ListItem text="Account in your business name" />
                                    <ListItem text="Send to and receive transfers from all Nigerian banks" />
                                    <ListItem text="Tools for business management" />
                                </>
                            </RadioOption>
                            <RadioOption
                                value="not-registered"
                                htmlFor="not-registered"
                                id="not-registered"
                                text="My business is not yet registered,
                                I would like to register"
                                name="userStatus"
                                checked={userStatus === 'not-registered'}
                                onChange={(e) => setUserStatus(e.target.value)}
                            >
                                <div className="option-description">
                                    Everything you need to start your business
                                </div>
                                <>
                                    <ListItem text="Registered business name with the CAC" />
                                    <ListItem text="Tax identification number" />
                                    <ListItem text="Your account will be automatically opened on completion" />
                                </>
                            </RadioOption>
                            <RadioOption
                                value="freelancer"
                                htmlFor="freelancer"
                                id="freelancer"
                                text="I’m a freelancer I do business in
                                my personal name"
                                name="userStatus"
                                checked={userStatus === 'freelancer'}
                                onChange={(e) => setUserStatus(e.target.value)}
                            >
                                <div className="option-description">Be your own boss</div>
                                <>
                                    <ListItem text="An amazing option" />
                                    <ListItem text="Another amazing option" />
                                    <ListItem text="What are you waitin for?" />
                                </>
                            </RadioOption>
                            <div className="error-msg">{error}</div>
                            <Button text="Next" submit />
                        </Form>
                    </FormContainer>
                </Main>
            </AuthContainer>
        </AuthWrapper>
    );
};

export default NewBusiness;
