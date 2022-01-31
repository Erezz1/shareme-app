import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Input from './components/Input';
import Links from './components/Links';

interface Props {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    user: any;
}

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    margin-top: 1.25rem;
    padding-bottom: 1.75rem;

    @media ( min-width: 768px ) {
        gap: 1.25rem;
    }
`;

const Navbar = ({ searchTerm, setSearchTerm, user }: Props ) => {

    const navigate = useNavigate();

    if ( !user ) return null;

    return (
        <Container>
            <Input
                navigate={ navigate }
                searchTerm={ searchTerm }
                setSearchTerm={ setSearchTerm }
            />

            <Links user={ user } />
        </Container>
    );
};

export default Navbar;
