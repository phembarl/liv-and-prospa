import styled from '@emotion/styled/macro';

export const AccountWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(131, 151, 171, 0.16);
    width: 48%;
    border-radius: 6px;
    height: 170px;
    padding: 1em 1.5em;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AccountType = styled.div`
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
    color: ${({ theme }) => theme.colors?.purpleDark};
    font-size: 14px;
`;

const AccountDetails = styled.div`
    font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
    font-size: 14px;
    color: ${({ theme }) => theme.colors?.grey01};
    margin-top: 0.3em;
`;

const AccountBalance = styled.div`
    font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
    color: ${({ theme }) => theme.colors?.purpleDark};
    font-size: 36px;

    .decimal {
        font-family: ${({ theme }) => theme.fonts?.brFirmaRegular};
        font-size: 24px;
    }
`;

interface IProps {
    accountType: 'current account' | 'savings account';
    bankName: string;
    accountNumber: number;
    image: string;
    balance: string;
    decimal?: string;
}

const AccountCard = ({ accountType, bankName, accountNumber, balance, decimal, image }: IProps) => (
    <AccountWrapper>
        <TopSection>
            <div>
                <AccountType>{accountType}</AccountType>
                <AccountDetails>
                    {bankName} - {accountNumber}
                </AccountDetails>
            </div>

            <div>
                <img src={image} alt="card-icon" />
            </div>
        </TopSection>
        <AccountBalance>
            {balance}
            <span className="decimal">.{decimal}</span>
        </AccountBalance>
    </AccountWrapper>
);

AccountCard.defaultProps = {
    decimal: '00',
};

export default AccountCard;
