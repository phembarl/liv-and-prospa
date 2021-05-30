import styled from '@emotion/styled/macro';
import SideBar from 'components/side-bar';

const Children = styled.div`
    padding-left: 300px;

    @media (max-width: 850px) {
        padding-left: 0;
    }
`;

interface IProps {
    children: React.ReactNode;
}

const DashBoardWrapper = ({ children }: IProps) => (
    <div>
        <SideBar />
        <Children>{children}</Children>
    </div>
);

export default DashBoardWrapper;
