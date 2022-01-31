import { useState } from 'react';
import styled from 'styled-components';

import PinNavigation from './routes/PinNavigation';
import { Navbar } from '../components';

interface Props {
    user: object;
}

const Wrap = styled.div`
    padding: 0 0.5rem;

    @media ( min-width: 768px ) {
        padding: 0 1.25rem;
    }
`;

const Pins = ({ user }: Props ) => {

    const [ searchTerm, setSearchTerm ] = useState<string>('');

    return (
        <Wrap>
            <div style={{ backgroundColor: '#f9fafb' }}>
                <Navbar
                    searchTerm={ searchTerm }
                    setSearchTerm={ setSearchTerm }
                    user={ user }
                />
            </div>

            <div style={{ height: '100%' }}>
                <PinNavigation
                    user={ user }
                    searchTerm={ searchTerm }
                    setSearchTerm={ setSearchTerm }
                />
            </div>
        </Wrap>
    );
};

export default Pins;
