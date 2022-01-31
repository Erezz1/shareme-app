import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import MasonryLayout from '../feed/components/MasonryLayout';
import Spinner from '../Spinner';
import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../../utils/data';
import { client } from '../../client';
import Banner from './components/Banner';
import ButtonsContainer from './components/ButtonsContainer';

const Container = styled.div`
    position: relative;
    padding-bottom: 0.5rem;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1.25rem;
`;

const Div = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.75rem;
`;

const Probably = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
`;

const UserProfile = () => {

    const [ user, setUser ] = useState<any | null>( null );
    const [ pins, setPins ] = useState<any[]>([]);
    const [ text, setText ] = useState<string>('Creados');
    const [ activeBtn, setActiveBtn ] = useState<string>('creados');
    const [ loading, setLoading ] = useState( false );

    const { userId = '' } = useParams();

    useEffect(() => {
        const query = userQuery( userId );
        setLoading( true );

        client
            .fetch( query )
            .then( data => {
                setUser( data[0] );
                setLoading( false );
            })
    }, [ userId ]);

    useEffect(() => {
        setLoading( true );

        if ( text === 'Creados' ) {
            const createdPinsQuery = userCreatedPinsQuery( userId );
            client
                .fetch( createdPinsQuery )
                .then( data => {
                    setPins( data );
                    setLoading( false )
                })
        } else {
            const savedPinsQuery = userSavedPinsQuery( userId );
            client
                .fetch( savedPinsQuery )
                .then( data => {
                    setPins( data );
                    setLoading( false )
                })
        }
    }, [ text, userId ]);
    

    if ( !user ) {
        return <Spinner message="Cargando perfil..." />
    }

    return (
        <Container>
            <Wrapper>
                <Div>
                    <Banner
                        user={ user }
                        userId={ userId }
                    />

                    <ButtonsContainer
                        setText={ setText }
                        setActiveBtn={ setActiveBtn }
                        activeBtn={ activeBtn }
                        loading={ loading }
                    />

                    {
                        pins?.length ? 
                        (
                            <div style={{ padding: '0 0.5rem' }}>
                                <MasonryLayout pins={ pins }/>
                            </div>
                        ) : (
                            <Probably>
                                No hay pins!
                            </Probably>
                        )
                    }

                </Div>
            </Wrapper>
        </Container>
    );
};

export default UserProfile;
