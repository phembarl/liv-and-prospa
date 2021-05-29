import styled from '@emotion/styled/macro';

export const AuthContainer = styled.div`
    padding: 2em;

    .form-title {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        font-size: 25px;
        color: #1b003b;
    }

    .form-description {
        color: #8397ab;
        font-size: 0.9em;
        margin-top: 0.3em;
    }
`;

export const AuthHint = styled.div`
    text-align: right;
    color: #1c1335;
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};

    .hint-action {
        color: ${({ theme }) => theme.colors?.pink01};
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-top: 10%;
`;

export const FormContainer = styled.div`
    min-width: 45%;
`;

export const Form = styled.form`
    margin-top: 1.5em;
    width: 100%;
`;
