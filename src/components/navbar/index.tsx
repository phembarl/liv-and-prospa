import { useState } from 'react';
import styled from '@emotion/styled/macro';
import BellIcon from 'assets/images/prospa-bell.svg';
import MenuIcon from 'assets/images/menu-icon.svg';
import Avatar from 'assets/images/avi.jpeg';
import MobileMenu from 'components/side-bar/mobile-menu';

const Navbar = styled.nav`
    background-color: #fff;
    color: ${({ theme }) => theme.colors?.grey01};
    font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.5em;
    height: 80px;
    position: relative;

    @media (max-width: 500px) {
        padding-right: 1.5em;
    }
`;

const Brand = styled.nav`
    font-size: 21px;
    cursor: pointer;
`;

const BellAvi = styled.nav`
    display: flex;
    align-items: center;
`;

const Bell = styled.nav`
    border: 2px solid rgba(131, 151, 171, 0.36);
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Avi = styled.nav`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50px;
    margin-left: 1.3em;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Hamburger = styled.div`
    position: absolute;
    left: 1rem;
    top: 40%;
    cursor: pointer;
    display: none;

    @media (max-width: 850px) {
        display: initial;
    }
`;

const NavBar = () => {
    const [openSideDrawer, setOpenSideDrawer] = useState(false);
    const onCloseSideDrawer = () => setOpenSideDrawer(false);
    const toggleSideDrawer = () => setOpenSideDrawer((prevState) => !prevState);
    return (
        <Navbar>
            <Hamburger onClick={toggleSideDrawer}>
                <img src={MenuIcon} alt="toggle-sidebar" />
            </Hamburger>
            <Brand className="brand">Dashboard</Brand>
            <BellAvi>
                <Bell>
                    <img src={BellIcon} alt="notifications" />
                </Bell>
                <Avi>
                    <img src={Avatar} alt="avatar" />
                </Avi>
            </BellAvi>
            <MobileMenu openSideDrawer={openSideDrawer} onCloseSideDrawer={onCloseSideDrawer} />
        </Navbar>
    );
};

export default NavBar;
