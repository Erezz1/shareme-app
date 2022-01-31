import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SuperiorButtons from './SuperiorButtons';
import InferiorButtons from './InferiorButtons';

import { urlFor } from '../../../client';
import { fetchUser } from '../../../utils/fetchUser';
import Profile from './Profile';

const Container = styled.div`
    position: relative;
    cursor: zoom-in;
    width: auto;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 500ms ease-in-out;

    &:hover {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
`;

const Image = styled.img`
    border-radius: 0.5rem;
    width: 100%;
`;

const Div = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem 0.25rem;
    z-index: 50;
`;

const Pin = ({ pin }: { pin: any; }) => {

    // Obtencion de datos del pin
    const { postedBy, image, _id, destination, save } = pin;

    // Estado del hover para mostrar u ocultar los botones superiores e inferiores
    const [ postedHover, setPostedHover ] = useState<boolean>( false );

    // Navigate para redireccionar a la pagina deseada
    const navigate = useNavigate();

    // Obtencion de la informacion del usuario en el localStorage
    const user = fetchUser();

    return (
        <div style={{ marginTop: '0.5rem' }}>
            <Container
                onMouseEnter={() =>  setPostedHover( true )}
                onMouseLeave={() =>  setPostedHover( false )}
                onClick={() => navigate(`/pin-detail/${ _id }`)}
            >
                <Image
                    src={ urlFor( image ).width(250).url() }
                    alt="user-post"
                />
                {
                    postedHover && (
                        <Div>
                            <SuperiorButtons
                                user={ user }
                                image={ image }
                                id={ _id }
                                save={ save }
                            />

                            <InferiorButtons
                                user={ user }
                                destination={ destination }
                                postedBy={ postedBy }
                                id={ _id }
                            />
                        </Div>
                    )
                }
            </Container>

            <Profile postedBy={ postedBy }/>
        </div>
    );
};

export default Pin;
