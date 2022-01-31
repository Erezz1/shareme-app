import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import SidebarMain from './SidebarMain';

interface Props {
    setToggleSidebar: Dispatch<SetStateAction<boolean>>;
    user: any;
}

const DivSidebar = styled.div`
    display: none;
    height: 100vh;
    flex: 0 1 auto;

    @media (min-width: 768px) {
        display: flex;
    }
`;

const Sidebar = ({ setToggleSidebar, user }: Props ) => {

    return (
        <DivSidebar>
            <SidebarMain user={ user && user } closeToggle={ setToggleSidebar } />
        </DivSidebar>
    );
};

export default Sidebar;
