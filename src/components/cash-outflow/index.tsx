import styled from '@emotion/styled/macro';
import BankIcon from 'assets/images/prospa-bank.svg';
import InternetIcon from 'assets/images/prospa-internet.svg';
import MarketingIcon from 'assets/images/prospa-marketing.svg';
import TransferIcon from 'assets/images/prospa-transfer.svg';
import ProgressBar from '@ramonak/react-progress-bar';

const Wrapper = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(131, 151, 171, 0.16);
    width: 43%;
    border-radius: 6px;
    padding: 1em 1.5em;

    .title {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        font-size: 18px;
    }

    .value {
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        font-size: 14px;
        margin-bottom: 0.3em;
    }
`;

const Body = styled.div`
    margin-top: 2em;
`;

const CashInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
`;

const IconTitle = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    background-color: ${({ backgroundColor }: { backgroundColor?: string }) => backgroundColor};
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

const InfoTitle = styled.div`
    margin-left: 0.7em;
    font-size: 14px;
    color: ${({ theme }) => theme.colors?.grey01};
`;

const ProgressDiv = styled.div`
    width: 40%;
`;

const CashOutflow = () => (
    <Wrapper>
        <p className="title">Cash outflow</p>

        <Body>
            <CashInfo>
                <IconTitle>
                    <Icon backgroundColor="#E900AE">
                        <img src={BankIcon} alt="bank-fees" />
                    </Icon>
                    <InfoTitle>Bank Fees</InfoTitle>
                </IconTitle>
                <ProgressDiv>
                    <p className="value">- N250,000</p>
                    <ProgressBar
                        height="4px"
                        bgColor="#FFCF56"
                        completed={String(90)}
                        width="100%"
                        baseBgColor="#EEEFF7"
                        isLabelVisible={false}
                        transitionTimingFunction="ease-in-out"
                        transitionDuration="2s"
                    />
                </ProgressDiv>
            </CashInfo>

            <CashInfo>
                <IconTitle>
                    <Icon backgroundColor="#17ECD4">
                        <img src={InternetIcon} alt="internet" />
                    </Icon>
                    <InfoTitle>Internet</InfoTitle>
                </IconTitle>
                <ProgressDiv>
                    <p className="value">- N250,000</p>
                    <ProgressBar
                        height="4px"
                        bgColor="#FFCF56"
                        completed={String(70)}
                        width="100%"
                        baseBgColor="#EEEFF7"
                        isLabelVisible={false}
                        transitionTimingFunction="ease-in-out"
                        transitionDuration="2s"
                    />
                </ProgressDiv>
            </CashInfo>

            <CashInfo>
                <IconTitle>
                    <Icon backgroundColor="#C155FF">
                        <img src={MarketingIcon} alt="marketing" />
                    </Icon>
                    <InfoTitle>Marketing</InfoTitle>
                </IconTitle>
                <ProgressDiv>
                    <p className="value">- N250,000</p>
                    <ProgressBar
                        height="4px"
                        bgColor="#FFCF56"
                        completed={String(50)}
                        width="100%"
                        baseBgColor="#EEEFF7"
                        isLabelVisible={false}
                        transitionTimingFunction="ease-in-out"
                        transitionDuration="2s"
                    />
                </ProgressDiv>
            </CashInfo>

            <CashInfo>
                <IconTitle>
                    <Icon backgroundColor="#00EC47">
                        <img src={TransferIcon} alt="transfer" />
                    </Icon>
                    <InfoTitle>Transfer</InfoTitle>
                </IconTitle>
                <ProgressDiv>
                    <p className="value">- N250,000</p>
                    <ProgressBar
                        height="4px"
                        bgColor="#FFCF56"
                        completed={String(30)}
                        width="100%"
                        baseBgColor="#EEEFF7"
                        isLabelVisible={false}
                        transitionTimingFunction="ease-in-out"
                        transitionDuration="2s"
                    />
                </ProgressDiv>
            </CashInfo>
        </Body>
    </Wrapper>
);

export default CashOutflow;
