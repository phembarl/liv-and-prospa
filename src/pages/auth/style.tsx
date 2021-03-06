import styled from '@emotion/styled/macro';

export const AuthContainer = styled.div`
    padding: 2em;

    .form-title {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        font-size: 25px;
        color: ${({ theme }) => theme.colors?.purpleText};
    }

    .form-description {
        color: #8397ab;
        font-size: 0.9em;
        margin-top: 0.3em;
    }

    .option-description {
        color: ${({ theme }) => theme.colors?.grey01};
        font-size: 13px;
        margin-top: 0.5em;
        margin-bottom: 1.5em;
    }

    button[type='submit'] {
        margin-top: 0.9em;
    }
`;

export const AuthHint = styled.div`
    text-align: right;
    color: ${({ theme }) => theme.colors?.purpleDark};
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};

    .hint-action {
        color: ${({ theme }) => theme.colors?.pink01};
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 376px;
    margin: auto;
    text-align: left;
    margin-top: 10%;
`;

export const FormContainer = styled.div`
    min-width: 45%;
`;

export const Form = styled.form`
    margin-top: 1.5em;
`;
