import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { client } from '../../../client';

const ButtonLogin = styled.button`
    background-color: ${ props => props.theme.backgroundColor.mainColor };
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition: all 300ms ease-in-out;
`;

const GoogleSign = () => {

    const navigate = useNavigate();

    // Hace el login con google
    const responseGoogle = ( res: any ) => {
        localStorage.setItem( 'user', JSON.stringify( res.profileObj ) );
        const { name, googleId, imageUrl } = res.profileObj;

        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl,
        }

        // Crea el usuario en la base de datos si no existe
        client.createIfNotExists( doc )
            .then( () => {
                // Redirige al usuario a la página principal
                navigate('/', { replace: true });
            })
    }

    return (
        <GoogleLogin
            clientId={ process.env.REACT_APP_GOOGLE_API_TOKEN || '' }
            render={ renderProps => (
                <ButtonLogin
                    type="button"
                    onClick={ renderProps.onClick }
                    disabled={ renderProps.disabled }
                >
                    <FcGoogle
                        fontSize={21}
                        style={{ marginRight: '0.25rem' }}
                    />
                    Inicia sesión con Google
                </ButtonLogin>
            )}
            onSuccess={ responseGoogle }
            onFailure={ responseGoogle }
            cookiePolicy="single_host_origin"
        />
    );
};

export default GoogleSign;
