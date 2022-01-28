import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
}

const Div = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

const Container = ({ children }: Props ) => {

    return (
        <Div>
            { children }
        </Div>
    )
};

export default Container;
