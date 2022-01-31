import styled from 'styled-components';
import { MdDownloadForOffline } from 'react-icons/md';

const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DownloadButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;

const DownloadButton = styled.a`
    background-color: #fff;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 1.25rem;
    opacity: 0.75;
    outline: none;

    &:hover {
        opacity: 1;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`;

const DestionationButton = styled.a`
    color: #333;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const TitleImage = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: bold;
    overflow-wrap: break-word;
    margin-top: 0.75rem;
`;

const Details = ({ pinDetail }: { pinDetail: any }) => {

    return (
        <>
        <DetailsContainer>
            <DownloadButtonContainer>
                <DownloadButton
                    href={`${ pinDetail.image?.asset?.url }?dl=`}
                    download
                    onClick={ event => event.stopPropagation() }
                    rel="noopener noreferrer"
                >
                    <MdDownloadForOffline />
                </DownloadButton>
            </DownloadButtonContainer>

            <DestionationButton
                href={ pinDetail.destination }
                target="_blank"
                rel="noopener noreferrer"
            >
                { pinDetail.destination }
            </DestionationButton>
        </DetailsContainer>

        <TitleImage>
            { pinDetail.title }
        </TitleImage>
        <p style={{ marginTop: '0.75rem' }}>{ pinDetail.about }</p>
        </>
    );
};

export default Details;
