import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Header, Sidebar } from '../components';
import HomeNavigation from './routes/HomeNavigation';

import { client } from '../client';
import { userQuery } from '../utils/data';
import { SidebarResponsive } from '../components/sidebar';
import { fetchUser } from '../utils/fetchUser';

import logo from '../assets/image/logo.png';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.backgroundColor.gray };
    height: 100vh;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Main = styled.main`
    padding-bottom: 0.5rem;
    flex: 1 1 0%;
    height: 100vh;
    overflow-y: scroll;
`;

const Home = () => {

    // Estado para controlar el sidebar
    const [ toggleSidebar, setToggleSidebar ] = useState<boolean>( false );

    // Estado del usuario
    const [ user, setUser ] = useState<any>( null );

    const scrollRef = useRef<HTMLDivElement>( null );

    // Obtencion de la informacion del usuario en el localStorage
    const userInfo = fetchUser();

    // Effect para obtener la informacion del usuario
    useEffect(() => {
        // Query para obtener la informacion del usuario
        const query = userQuery( userInfo?.googleId );

        // Obtencion del usuario desde el CMS
        client.fetch( query )
            .then( data => {
                setUser( data[0] );
            })
            .catch( console.log );

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo( 0, 0 );
    }, [])

    return (
        <HomeContainer>
            <Sidebar setToggleSidebar={ setToggleSidebar } user={ user && user } />

            <Header
                logo={ logo }
                user={ user && user }
                setToggleSidebar={ setToggleSidebar }
            >
                { toggleSidebar && (<SidebarResponsive setToggleSidebar={ setToggleSidebar } user={ user && user } />)}
            </Header>

            <Main ref={ scrollRef }>
                <HomeNavigation user={ user && user } />
            </Main>
        </HomeContainer>
    );
};

export default Home;
