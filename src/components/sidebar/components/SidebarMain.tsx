import { Dispatch, SetStateAction } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import styled from 'styled-components';

import logo from '../../../assets/image/logo.png';
import { categories } from '../../../utils/data';

interface Props {
    user: any;
    closeToggle: Dispatch<SetStateAction<boolean>>;
}

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    height: 100%;
    overflow-y: scroll;
    min-width: 210px;
`;

const Logo = styled( Link )`
    display: flex;
    padding: 0 1.25rem;
    margin: 1.5rem 0;
    padding-top: 0.25rem;
    width: 190px;
    align-items: center;
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-left: 1.25rem;
`;

const NavigationItem = styled( NavLink )`
    color: #6f6f6f;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-transform: capitalize;

    &.active {
        color: #000;
        font-weight: 900;
        border-right: 2px solid #000;
        text-transform: capitalize;
    }

    &.not-active {
        text-transform: capitalize;
    }

    &:hover {
        color: #000;
    }
`;

const TitleCategories = styled.h3`
    margin-top: 0.5rem;
    padding: 1.25rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
`;

const ProfileLink = styled( Link )`
    display: flex;
    margin: 1.25rem 0;
    margin-bottom: 0.75rem;
    padding: 1rem 1.25rem;
    gap: 0.5rem;
    align-items: center;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    margin: 1.25rem;
    text-decoration: none;
    color: #333;
`;

const ProfileImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`;

const ImageCategory = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const SidebarMain = ({ user, closeToggle }: Props ) => {

    const handleCloseSidebar = () => {
        if ( closeToggle ) closeToggle( false );
    }

    return (
        <SidebarContainer className="hide-scrollbar">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Logo
                    to="/"
                    onClick={ handleCloseSidebar }
                >
                    <img width="100%" src={ logo } alt="logo" />
                </Logo>

                <Navigation>
                    <NavigationItem
                        to="/"
                        className={ ({ isActive }) => isActive ? 'active' : 'not-active' }
                        onClick={ handleCloseSidebar }
                    >
                        <RiHomeFill /> Home
                    </NavigationItem>


                    <TitleCategories>Discover categories</TitleCategories>

                    {
                        categories.slice( 0, categories.length - 1 ).map( category => (
                            <NavigationItem
                                to={ `/category/${ category.name }` }
                                onClick={ handleCloseSidebar }
                                key={ category.name }
                            >
                                <ImageCategory
                                    src={ category.image }
                                    alt={ category.name }
                                />
                                { category.name }
                            </NavigationItem>
                        ))
                    }
                </Navigation>
            </div>

            {
                user && (
                    <ProfileLink
                        to={`user-profile/${ user._id }`}
                        onClick={ handleCloseSidebar }
                    >
                        <ProfileImage
                            src={ user.image }
                            alt="user-profile"
                        />
                        <p>{ user.userName }</p>
                    </ProfileLink>
                )
            }
        </SidebarContainer>
    );
};

export default SidebarMain;
