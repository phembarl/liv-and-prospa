import Logo from 'assets/images/prospa-logo.svg';
import SafeImage from 'assets/images/prospa-safe.svg';
import DashedBorder from 'components/dashed-border';
import { SidebarWrapper, Text, ImageContainer } from './style';

interface IProps {
    variant?: 'primary' | 'secondary';
}

const AuthSidebar = ({ variant }: IProps) => {
    return (
        <SidebarWrapper
            style={{ backgroundColor: variant === 'secondary' ? '#1C1335' : '#7E51FF' }}
        >
            <div>
                <img src={Logo} alt="logo" />

                <DashedBorder className="dashed-border" />
                <Text>
                    <p className="large-txt">Create multiple sub-accounts</p>
                    <p className="regular-txt">
                        Organise your business finances easily with multiple accounts. No limits!
                    </p>
                </Text>
            </div>

            <ImageContainer>
                <img src={SafeImage} alt="safe" />
            </ImageContainer>

            <p className="copyright">© 2021 Prospa Inc</p>
        </SidebarWrapper>
    );
};

AuthSidebar.defaultProps = {
    variant: 'primary',
};

export default AuthSidebar;
