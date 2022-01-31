import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 1rem;
`;

const Spin = styled( Circles )`
    margin: 1.25rem;
`;

const Text = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    padding: 0 0.5rem;
    margin-top: 1rem;
`;

const Spinner = ({ message }: { message?: string; }) => {
    return (
        <Container>
            <Spin
                color="#00BFFF"
                height={80}
                width={80}
            />

            {
                message && <Text>{ message }</Text>
            }
        </Container>
    );
};

export default Spinner;
