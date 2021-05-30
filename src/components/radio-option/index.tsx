/* eslint-disable react/require-default-props */
import styled from '@emotion/styled/macro';
import React, { InputHTMLAttributes, forwardRef } from 'react';

const Option = styled.div`
    margin-bottom: 1rem;
    padding: 1em 1.5em;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(131, 151, 171, 0.24);
    border-radius: 6px;

    &.checked {
        border: 1px solid ${({ theme }) => theme.colors?.pink01};
        box-shadow: none;
    }
`;

const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
`;

const InputRadio = styled.input`
    margin-right: 1em;
    -webkit-appearance: none;
    min-width: 22px;
    max-height: 22px;
    border-radius: 50%;
    outline: none;
    border: 1px solid #eeeff7;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        margin: 20% auto;
        border-radius: 50%;
    }

    &:checked:before {
        background: ${({ theme }) => theme.colors?.pink01};
    }
`;

const Children = styled.div`
    margin-left: calc(22px + 1em);
    overflow: hidden;
    transition: all 5s;
    height: 0;
    opacity: 0;
    transition: linear 0.15s;

    &.show-children {
        height: initial;
        opacity: 1;
    }
`;

interface IRadioOptionProps extends InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    id: string;
    name: string;
    value: string;
    text: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    children?: React.ReactNode;
}

// const RadioOption = ({
//     htmlFor,
//     id,
//     name,
//     value,
//     text,
//     onChange,
//     checked,
//     children,
// }: // ...rest
// IRadioOptionProps) => (
//     <Option className={checked ? 'checked' : ''}>
//         <Label htmlFor={htmlFor}>
//             <InputRadio
//                 type="radio"
//                 id={id}
//                 name={name}
//                 value={value}
//                 onChange={onChange}
//                 checked={checked}
//                 // {...rest}
//             />
//             {text}
//         </Label>
//         <Children className={checked ? 'show-children' : ''}>{children}</Children>
//     </Option>
// );

const RadioOption = forwardRef<HTMLInputElement, IRadioOptionProps>(
    ({ htmlFor, id, name, value, text, onChange, checked, children }, ref) => (
        <Option className={checked ? 'checked' : ''}>
            <Label htmlFor={htmlFor}>
                <InputRadio
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    ref={ref}
                    // {...rest}
                />
                {text}
            </Label>
            <Children className={checked ? 'show-children' : ''}>{children}</Children>
        </Option>
    ),
);

export default RadioOption;
