import styled from '@emotion/styled/macro';
import ItemIcon from 'assets/images/item-icon.svg';
import InvoiceIcon from 'assets/images/invoice-icon.svg';
import Logo from 'assets/images/prospa-logo-grey.svg';
import CaretDown from 'assets/images/caret-down.svg';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-responsive-modal';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors?.white};
    color: ${({ theme }) => theme.colors?.grey01};
    width: 80%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2em;
    font-size: 14px;
    box-shadow: 0 2px 22px rgba(131, 151, 171, 0.24);
    white-space: nowrap;
    overflow: hidden;

    .dashed-border {
        margin-top: 3em;
    }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name-account {
        margin-left: 1.5em;
    }

    .business-name {
        color: ${({ theme }) => theme.colors?.purpleText};
        font-family: ${({ theme }) => theme.fonts?.brFirmaSemiBold};
        font-size: 1rem;
    }

    .manage-account {
        font-size: 12px;
    }
`;
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const UserCircle = styled.div`
    font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors?.purpleDark};
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const DropdownBtn = styled.div`
    background-color: ${({ theme }) => theme.colors?.grey02};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(131, 151, 171, 0.32);
    border-radius: 4px;
    position: absolute;
    top: 6em;
    width: 85%;

    .add-business {
        color: ${({ theme }) => theme.colors?.pink01};
        cursor: pointer;
        padding: 1.3em;
        padding-top: 0;
        font-size: 11px;
    }
`;

export const DropdownItem = styled.div`
    padding: 1.3em;
    font-size: 13px;
    cursor: pointer;

    &.active {
        color: ${({ theme }) => theme.colors?.purpleDark};
    }

    &.has-border {
        border-bottom: 2px solid ${({ theme }) => theme.colors?.grey03};
    }
`;

// Sidebar Item start

const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts?.brFirmaMedium};
    text-transform: capitalize;
    cursor: pointer;
    margin-bottom: 1.8em;
`;

const Text = styled.div`
    margin-left: 1em;
`;
const SidebarMain = styled.div`
    width: 100%;
`;

const SideBarItems = styled.div`
    margin-top: 2em;
`;

interface ISideBarItemProps {
    text: string;
    image?: string;
}

const SideBarItem = ({ text, image }: ISideBarItemProps) => (
    <ItemWrapper>
        <img src={image || ItemIcon} alt={text} />
        <Text>{text}</Text>
    </ItemWrapper>
);

SideBarItem.defaultProps = {
    image: '',
};

// End of sidebar Item

// MobileMenu, default export

type IProps = {
    openSideDrawer: boolean;
    onCloseSideDrawer: () => void;
};

const MobileMenu = ({ openSideDrawer, onCloseSideDrawer }: IProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownMenu = useRef<HTMLDivElement>(null);
    const dropdownButton = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: Event) => {
        if (
            dropdownMenu.current &&
            dropdownButton.current &&
            !dropdownMenu.current.contains(e.target as Node) &&
            !dropdownButton.current.contains(e.target as Node)
        ) {
            setShowDropdown(false);
        }
    };

    const toggleDropDown = () => setShowDropdown((prevState) => !prevState);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    }, []);

    return (
        <Modal
            open={openSideDrawer}
            onClose={onCloseSideDrawer}
            animationDuration={150}
            showCloseIcon={false}
            classNames={{
                modal: 'SideDrawer-modal',
                overlay: 'SideDrawer-overlay',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
            }}
        >
            <Wrapper>
                <SidebarMain>
                    <UserInfoContainer>
                        <UserInfo>
                            <UserCircle>BN</UserCircle>
                            <div className="name-account">
                                <p className="business-name">Clayvant Inc</p>
                                <p className="manage-account">Manage account</p>
                            </div>
                        </UserInfo>
                        <DropdownBtn onClick={toggleDropDown} ref={dropdownButton}>
                            <img src={CaretDown} alt="dropdown button" />
                        </DropdownBtn>
                    </UserInfoContainer>

                    {showDropdown && (
                        <Dropdown ref={dropdownMenu}>
                            <DropdownItem className="active has-border">Clayvant Inc</DropdownItem>
                            <DropdownItem className="has-border">Business name 2</DropdownItem>
                            <DropdownItem>Business name 3</DropdownItem>
                            <div className="add-business">Add a business</div>
                        </Dropdown>
                    )}

                    <SideBarItems>
                        <SideBarItem text="invoice" image={InvoiceIcon} />
                        <SideBarItem text="management" />
                        <SideBarItem text="security" />
                        <SideBarItem text="support" />
                        <SideBarItem text="settings" />
                        <SideBarItem text="privacy" />
                    </SideBarItems>
                </SidebarMain>
                <div>
                    <img src={Logo} alt="prospa-logo" />
                </div>
            </Wrapper>
        </Modal>
    );
};

export default MobileMenu;
