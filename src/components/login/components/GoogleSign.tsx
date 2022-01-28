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

const Icon = styled( FcGoogle )`
    padding-right: 1rem;
    font-size: 1.2rem;
`;

const GoogleSign = () => {

    const navigate = useNavigate();

    const responseGoogle = async ( res: any ) => {
        localStorage.setItem( 'user', JSON.stringify( res.profileObj ) );
        const { name, googleId, imageUrl } = res.profileObj;

        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl,
        }

        client.createIfNotExists( doc )
            .then( () => {
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
                    <Icon /> Inicia sesión con Google
                </ButtonLogin>
            )}
            onSuccess={ responseGoogle }
            onFailure={ responseGoogle }
            cookiePolicy="single_host_origin"
        />
    );
};

export default GoogleSign;
