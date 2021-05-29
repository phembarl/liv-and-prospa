import styled from '@emotion/styled/macro';

export const InputWrapper = styled.div`
    margin-bottom: 1em;
    position: relative;
`;

export const Input = styled.input`
    background-color: #f4f8fb;
    margin: auto;
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
    font-size: 1rem;
    color: #1c1335;
    padding: 23px 50px 5px 15px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #e0e2ec;
    outline: none;
    transition: all 0.2s;

    background: linear-gradient(to right, #e0e2ec 0%, #e0e2ec 100%) left bottom #f4f8fb no-repeat;
    background-size: 0 2px;

    &::placeholder {
        color: #8397ab;
        font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
        font-size: 1.2em;
    }

    &:focus {
        border: none;
        background: linear-gradient(to right, #fa4a84 0%, #7e51ff 50%, #00d2ff 100%) left bottom
            #f4f8fb no-repeat;
        background-size: 100% 2px;
    }
`;

export const Label = styled.label`
    color: #8397ab;
    font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};

    .label-text {
        pointer-events: none;
        position: absolute;
        top: 30%;
        left: 15px;
        transition: transform 0.2s ease-out 0ms;
        transform-origin: top left;

        ${InputWrapper}:focus-within &, &.has-value {
            transform: translateY(-8px) scale(0.65);
            color: ${({ theme }) => theme.colors?.pink01};
        }
    }
`;
