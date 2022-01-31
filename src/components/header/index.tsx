import { Dispatch, ReactNode, SetStateAction } from 'react';
import styled from 'styled-components';

import Menu from './components/Menu';

interface Props {
    children: ReactNode;
    setToggleSidebar: Dispatch<SetStateAction<boolean>>;
    user: any;
    logo: string;
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Header = ({ children, setToggleSidebar, user, logo }: Props ) => {

    return (
        <HeaderContainer>
            <Menu
                setToggleSidebar={ setToggleSidebar }
                logo={ logo }
                user={ user }
            />

            { children }
        </HeaderContainer>
    );
};

export default Header;
