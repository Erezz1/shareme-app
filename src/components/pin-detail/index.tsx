import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import MasonryLayout from '../feed/components/MasonryLayout';
import Spinner from '../Spinner';
import { client, urlFor } from '../../client';
import { pinDetailMorePinQuery, pinDetailQuery } from '../../utils/data';

import CreateComment from './components/CreateComment';
import ListComments from './components/ListComments';
import Details from './components/Details';

interface Props {
    user: any;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #fff;
    max-width: 1500px;
    border-radius: 32px;

    @media ( min-width: 1280px ) {
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 auto;

    @media ( min-width: 768px ) {
        align-items: flex-start;
    }
`;

const Image = styled.img`
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    width: 100%;
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 1.25rem;

    @media ( min-width: 1280px ) {
        min-width: 620px;
    }
`;

const LinkProfile = styled( Link )`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.25rem;
    align-items: center;
    background-color: #fff;
    border-radius: 1.5rem;
    color: #333;
    text-decoration: none;
`;

const ImageProfile = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
`;

const NameProfile = styled.span`
    font-weight: bolder;
    text-transform: capitalize;
`;

const TitleComments = styled.h2`
    margin-top: 1.25rem;
    font-size: 1.5rem;
    line-height: 2rem;
`;



const TitlePinsSection = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
`;

const PinDetail = ({ user }: Props ) => {

    const [ pins, setPins ] = useState<any[]>([]);
    const [ pinDetail, setPinDetail ] = useState<any>( null );
    const [ comment, setComment ] = useState<string>('');
    const [ addingComment, setAddingComment ] = useState<boolean>( false );
    const [ loading, setLoading ] = useState<boolean>( true );

    const { pinId = '' } = useParams<string>();

    const addComment = () => {
        if ( comment ) {
            setAddingComment( true );

            client
                .patch( pinId )
                .setIfMissing({ comments: [] })
                .insert('after', 'comments[-1]', [{
                    comment,
                    _key: uuidv4(),
                    postedBy: {
                        _type: 'postedBy',
                        _ref: user._id
                    }
                }])
                .commit()
                .then(() => {
                    fetchPinDetails();
                    setComment('');
                    setAddingComment( false );
                })
        }
    }

    const fetchPinDetails = () => {
        let query = pinDetailQuery( pinId );
        setLoading( true );

        if ( query ) {
            client
                .fetch( query )
                .then( data => {
                    setPinDetail( data[0] );

                    if ( data[0] ) {
                        query = pinDetailMorePinQuery( data[0] );

                        client
                            .fetch( query )
                            .then( res => setPins( res ) );
                    }
                })
        }
    }

    useEffect(() => {
        fetchPinDetails();
        // eslint-disable-next-line
    }, [ pinId ]);

    if ( !pinDetail ) {
        return <Spinner message="Cargando pin..." />;
    }

    return (
        <>
        <Container>
            <ImageContainer>
                <Image
                    src={ pinDetail?.image && urlFor( pinDetail.image ).url() }
                    alt="user-pin"
                />
            </ImageContainer>
            <Wrapper>
                <Details pinDetail={ pinDetail } />

                <LinkProfile to={`/user-profile/${ pinDetail.postedBy?._id }`}>
                    <ImageProfile
                        src={ pinDetail.postedBy?.image }
                        alt="avatar user"
                    />
                    <NameProfile>{ pinDetail.postedBy?.userName }</NameProfile>
                </LinkProfile>

                <TitleComments>Comments</TitleComments>

                <ListComments pinDetail={ pinDetail } />

                <CreateComment
                    pinDetail={ pinDetail }
                    comment={ comment }
                    setComment={ setComment }
                    addComment={ addComment }
                    addingComment={ addingComment }
                />

            </Wrapper>
        </Container>

        {
            loading
                ? <>
                    <TitlePinsSection>
                        Mas pins como este
                    </TitlePinsSection>
                    <MasonryLayout pins={ pins } />
                </>
                : <Spinner message="Cargando mas pins" />
        }
        </>
    );
};

export default PinDetail;
