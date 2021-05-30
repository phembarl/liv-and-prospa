/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import { Input, InputWrapper, Label } from './style';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
    inputStyle?: string;
    icon?: boolean;
    iconImage?: string;
    iconAlt?: string;
    iconClass?: string;
    iconStyle?: { [key: string]: any };
    onIconClick?: () => void;
    label?: string;
    id?: string;
    value?: string;
}

const InputField = forwardRef<HTMLInputElement, IProps>(
    ({ inputStyle, errorMessage, label, id, value, ...rest }, ref) => (
        <InputWrapper className={inputStyle}>
            <div>
                <Label htmlFor={id}>
                    {label && (
                        <span className={`label-text ${value ? 'has-value' : ''}`}>{label}</span>
                    )}
                    <Input value={value} {...rest} ref={ref} />
                </Label>
            </div>
            <div className="error-msg">{errorMessage}</div>
        </InputWrapper>
    ),
);

InputField.defaultProps = {
    onIconClick: undefined,
    errorMessage: '',
    inputStyle: '',
    icon: false,
    iconImage: '',
    iconAlt: '',
    iconClass: '',
    iconStyle: {},
    label: '',
    id: '',
    value: '',
};

export default InputField;
