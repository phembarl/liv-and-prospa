import styled from '@emotion/styled/macro';

export const ButtonComponent = styled.button`
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 18px 20px;
    width: 85%;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors?.white};
    background: ${({ theme }) => theme.colors?.pink01};
`;
