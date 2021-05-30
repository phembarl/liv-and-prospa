import React from 'react';
import { ButtonComponent } from './style';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string;
    submit?: boolean;
    disabled?: boolean;
}

const Button = ({ text, submit, className, onClick, disabled, ...props }: IProps) => (
    <ButtonComponent
        type={submit ? 'submit' : 'button'}
        className={`btn-primary ${className}`}
        onClick={onClick}
        disabled={disabled}
        style={{ width: submit ? '100%' : 'inherit' }}
        {...props}
    >
        {text}
    </ButtonComponent>
);

Button.defaultProps = {
    submit: false,
    disabled: false,
};

export default Button;
