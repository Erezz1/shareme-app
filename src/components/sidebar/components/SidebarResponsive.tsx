import { Dispatch, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

import SidebarMain from './SidebarMain';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

interface Props {
    setToggleSidebar: Dispatch<SetStateAction<boolean>>;
    user: any;
}

const SidebarContainer = styled.aside`
    position: fixed;
    width: 66.666667%;
    background-color: #fff;
    height: 100vh;
    overflow-y: auto;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    z-index: 10;
`;

const HeaderSidebar = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 0.25rem;

    & > svg {
        margin: 0.75rem 0.75rem 0 0;
    }
`;

const SidebarResponsive = ({ setToggleSidebar, user }: Props ) => {

    // Se crea una referencia para el elemento del DOM
    const ref = useRef( null );

    // Se usa el hook useOnClickOutside para detectar el click fuera del sidebar y asi cerrarlo
    useOnClickOutside( ref, () => setToggleSidebar( false ) );

    return (
        <SidebarContainer ref={ ref } className="animate__animated animate__fadeInLeft animate__faster">
            <HeaderSidebar>
                <AiFillCloseCircle
                    fontSize={30}
                    style={{ cursor: 'pointer' }}
                    onClick={ () => setToggleSidebar( false )}
                />
            </HeaderSidebar>

            <SidebarMain user={ user && user } closeToggle={ setToggleSidebar } />
        </SidebarContainer>
    );
};

export default SidebarResponsive;
