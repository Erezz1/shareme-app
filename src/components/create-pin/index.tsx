import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Spinner from '../Spinner';
import { client } from '../../client';
import ImageUp from './components/ImageUp';
import Form from './components/Form';
import ImageUploaded from './components/ImageUploaded';

interface Props {
    user: any;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.25rem;

    @media ( min-width: 1024px ) {
        height: 80%;
    }
`;

const TextErrorFields = styled.p`
    color: rgb(239 68 68);
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    transition: all 150ms ease-in;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 0.75rem;
    width: 100%;

    @media ( min-width: 1024px ) {
        flex-direction: row;
        padding: 1.25rem;
        width: 80%;
    }
`;

const ImageContainer = styled.div`
    background-color: ${ props => props.theme.backgroundColor.secondaryColor };
    padding: 0.75rem;
    display: flex;
    flex-shrink: 0.7;
    width: 100%;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px dotted rgb(209 213 219);
    padding: 0.75rem;
    width: 100%;
    height: 420px;
`;

const CreatePin = ({ user }: Props ) => {

    const [ title, setTitle ] = useState<string>('');
    const [ about, setAbout ] = useState<string>('');
    const [ destination, setDestination ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>( false );
    const [ fields, setFields ] = useState<any[] | boolean>( false );
    const [ category, setCategory ] = useState<string>('');
    const [ imageAsset, setImageAsset ] = useState<any>( null );
    const [ wrongImageType, setWrongImageType ] = useState<boolean>( false );

    const navigate = useNavigate();

    const uploadImage = ( event: ChangeEvent<HTMLInputElement> ) => {
        let file = null;
        let type = null;

        if ( event.target.files && event.target.files[ 0 ] ) {
            file = event.target.files[ 0 ];
            type = file.type;
        }

        if ( 
            file && (
                type === 'image/jpeg'
                || type === 'image/png'
                || type === 'image/jpg'
                || type === 'image/svg'
                || type === 'image/gif'
            )
        ) {
            setWrongImageType( false );
            setLoading( true );

            client.assets
                .upload('image', file, {
                    contentType: type,
                    filename: file.name,
                })
                .then(( document: any ) => {
                    setImageAsset( document );
                    setLoading( false );
                })
                .catch(( error: any ) => {
                    console.log('Error al subir la imagen', error );
                });
        } else {
            setWrongImageType( true );
        }
    }

    const savePin = () => {
        if ( title && about && destination && imageAsset?._id && category ) {
            const doc = {
                _type: 'pin',
                title,
                about,
                destination,
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id,
                    }
                },
                userId: user._id,
                postedBy: {
                    _type: 'postedBy',
                    _ref: user._id,
                },
                category
            }

            client.create( doc )
                .then(() => {
                    navigate('/');
                })
        } else {
            setFields( true );
            setTimeout(
                () => setFields( false ),
                2000
            );
        }
    }

    return (
        <Container>
            {
                fields && (
                    <TextErrorFields>Por favor, llena todos los campos.</TextErrorFields>
                )
            }

            <Wrapper>
                <ImageContainer>
                    <ImageWrapper>
                        { loading && (<Spinner message="Cargando..." />) }

                        { wrongImageType && <p>Extension del archivo invalida.</p> }

                        {
                            !imageAsset
                                ? <ImageUp uploadImage={ uploadImage } /> 
                                : <ImageUploaded
                                    imageAsset={ imageAsset }
                                    setImageAsset={ setImageAsset }
                                />
                        }
                    </ImageWrapper>
                </ImageContainer>

                <Form
                    title={ title }
                    category={ category }
                    setCategory={ setCategory }
                    about={ about }
                    destination={ destination }
                    setTitle={ setTitle }
                    setAbout={ setAbout }
                    setDestination={ setDestination }
                    savePin={ savePin }
                    user={ user }
                />
            </Wrapper>
        </Container>
    );
};

export default CreatePin;
