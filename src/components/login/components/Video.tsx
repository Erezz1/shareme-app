import { ReactNode } from 'react';
import styled from 'styled-components';

import shareVideo from '../../../assets/video/share.mp4';

const Div = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const VideoContainer = ({ children }: { children: ReactNode }) => {

    return (
        <Div>
            <Video
                src={ shareVideo }
                typeof="video/mp4"
                itemType="video/mp4"
                loop
                controls={ false }
                muted
                autoPlay
            />

            { children }
        </Div>
    );
};

export default VideoContainer;
