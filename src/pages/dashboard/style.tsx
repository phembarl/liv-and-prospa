import styled from '@emotion/styled/macro';
import { AccountWrapper } from '../../components/account-card/index';

export const DashboardContainer = styled.div`
    background-color: ${({ theme }) => theme.colors?.grey02};
    min-height: 100vh;

    .dashboard-btn {
        height: 44px;
        padding: 0 20px;
        font-size: 14px;
    }
`;

export const Body = styled.div`
    padding: 2em 3.5em;
`;

export const WelcomeDiv = styled.div`
    color: ${({ theme }) => theme.colors?.purpleDark};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .welcome-back {
        font-family: ${({ theme }) => theme.fonts?.brFirmaBold};
        font-size: 24px;
    }

    .what-happened {
        font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
        span {
            color: ${({ theme }) => theme.colors?.pink01};
            text-decoration: underline;
            cursor: pointer;
        }

        @media (max-width: 700px) {
            margin-bottom: 1.5em;
        }
    }

    @media (max-width: 700px) {
        display: initial;
    }
`;

export const Accounts = styled.div`
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: 850px) and (max-width: 1024px) {
        display: initial;
        width: 100%;

        ${AccountWrapper} {
            width: 100%;
            margin-top: 1em;
        }
    }

    @media (max-width: 750px) {
        display: initial;
        width: 100%;

        ${AccountWrapper} {
            width: 100%;
            margin-top: 1em;
        }
    }
`;

export const Charts = styled.div`
    display: flex;
    justify-content: space-between;
`;
