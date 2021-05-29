import styled from '@emotion/styled/macro';
import AuthSidebar from '../auth-side-bar';

const Children = styled.div`
    padding-left: 358px;

    @media (max-width: 850px) {
        padding-left: 0;
    }
`;

interface IProps {
    children: React.ReactNode;
    sideBarVariant?: 'primary' | 'secondary';
}

const AuthWrapper = ({ children, sideBarVariant }: IProps) => (
    <div>
        <AuthSidebar variant={sideBarVariant} />
        <Children>{children}</Children>
    </div>
);

AuthWrapper.defaultProps = {
    sideBarVariant: 'primary',
};

export default AuthWrapper;
