import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineLogout } from 'react-icons/ai';

const ButtonLogout = styled.button`
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 9999rem;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GoogleLogoutBtn = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <GoogleLogout
            clientId={ process.env.REACT_APP_GOOGLE_API_TOKEN || '' }
            render={ renderProps => (
                <ButtonLogout
                    type="button"
                    onClick={ renderProps.onClick }
                    disabled={ renderProps.disabled }
                >
                    <AiOutlineLogout
                        color='red'
                        fontSize={ 21 }
                    />
                </ButtonLogout>
            )}
            onLogoutSuccess={ logout }
        />
    );
};

export default GoogleLogoutBtn;
