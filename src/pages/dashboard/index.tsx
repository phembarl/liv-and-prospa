import Button from 'components/button';
import DashBoardWrapper from 'components/dashboard-wrapper';
import { Accounts, Body, DashboardContainer, WelcomeDiv, Charts } from 'pages/dashboard/style';
import NavBar from 'components/navbar';
import AccountCard from 'components/account-card';
import CardPurple from 'assets/images/card-purple.svg';
import CardBlue from 'assets/images/card-blue.svg';
import CashOutflow from 'components/cash-outflow';

const Dashboard = () => (
    <DashBoardWrapper>
        <DashboardContainer>
            <NavBar />
            <Body>
                <WelcomeDiv>
                    <div>
                        <p className="welcome-back">Welcome back, Femi</p>
                        <p className="what-happened">
                            Here&lsquo;s what has been happening in the last <span>7 days</span>
                        </p>
                    </div>
                    <Button text="Add a sub account" className="dashboard-btn" />
                </WelcomeDiv>
                <Accounts>
                    <AccountCard
                        accountType="current account"
                        bankName="providus bank"
                        accountNumber={9906533917}
                        balance="N814,800"
                        decimal="45"
                        image={CardPurple}
                    />
                    <AccountCard
                        accountType="savings account"
                        bankName="UBA"
                        accountNumber={2081336535}
                        balance="N1,000,800"
                        decimal="45"
                        image={CardBlue}
                    />
                </Accounts>

                <Charts>
                    <div>Graph goes here</div>
                    <CashOutflow />
                </Charts>
            </Body>
        </DashboardContainer>
    </DashBoardWrapper>
);

export default Dashboard;
