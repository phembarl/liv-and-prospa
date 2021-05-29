import styled from '@emotion/styled/macro';

export const SidebarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors?.purple01};
    color: #fff;
    width: 358px;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2em;
    font-size: 14px;

    .dashed-border {
        margin-top: 3em;
    }

    @media (max-width: 850px) {
        display: none;
    }
`;

export const Text = styled.div`
    margin-top: 3em;
    .large-txt {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        font-size: 32px;
    }

    .regular-txt {
        margin-top: 1em;
    }
`;

export const ImageContainer = styled.div`
    margin: auto;
    img {
        width: 90%;
    }
`;
