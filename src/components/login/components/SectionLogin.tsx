import styled from 'styled-components';

import logo from '../../../assets/image/logowhite.png';
import GoogleSign from './GoogleSign';

const Div = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${ props => props.theme.backgroundColor.blackOverlay };
`;

const BoxShadow = styled.div`
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;

const SectionLogin = () => {
    return (
        <Div>
            <div style={{ padding: '1.25rem' }}>
                <img
                    src={ logo }
                    alt="logo"
                    width="130px"
                />
            </div>

            <BoxShadow>
                <GoogleSign />
            </BoxShadow>
        </Div>
    );
};

export default SectionLogin;
