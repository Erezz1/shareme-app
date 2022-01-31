import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

interface Props {
    setToggleSidebar: Dispatch<SetStateAction<boolean>>;
    user: any;
    logo: string;
}

const MenuContainer = styled.nav`
    padding: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const ProfileImage = styled.img`
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
`;

const Menu = ({ setToggleSidebar, user, logo }: Props ) => {

    return (
        <MenuContainer>
            <HiMenu
                fontSize={40}
                style={{ cursor: 'pointer' }}
                onClick={ () => setToggleSidebar( true )}
            />

            <Link to="/">
                <img
                    src={ logo }
                    alt="logo"
                    style={{ width: '7rem' }}
                />
            </Link>

            <Link to={`/user-profile/${ user?._id }`}>
                <ProfileImage
                    src={ user?.image }
                    alt="logo"
                />
            </Link>
        </MenuContainer>
    );
};

export default Menu;
