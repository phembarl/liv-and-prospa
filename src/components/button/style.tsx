import styled from '@emotion/styled/macro';

export const ButtonComponent = styled.button`
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 18px 0;
    width: 85%;
    margin-top: 0.9em;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors?.white};
    background: ${({ theme }) => theme.colors?.pink01};
    width: 100%;

    /* &:disabled {
        background: lighten(#7be495, 10);
        cursor: not-allowed;
    } */
`;
