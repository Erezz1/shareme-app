import Masonry from 'react-masonry-css';
import styled from 'styled-components';

import Pin from './Pin';

const breakpointCols = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
};

const MasonryContainer = styled( Masonry )`
    display: flex;
    gap: 1rem;
`;

const MasonryLayout = ({ pins }: { pins: any[]; }) => {
    return (
        <MasonryContainer
            breakpointCols={ breakpointCols }
            className="my-masonry-grid"
        >
            {
                pins.map( ( pin: any ) => (
                    <Pin
                        key={ pin._id }
                        pin={ pin }
                    />
                ))
            }
        </MasonryContainer>
    );
};

export default MasonryLayout;
