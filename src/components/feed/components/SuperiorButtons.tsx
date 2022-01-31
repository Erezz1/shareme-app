import styled from 'styled-components';
import { MdDownloadForOffline } from 'react-icons/md';
import { v4 as uuid } from 'uuid';

import { client } from '../../../client';
import { useState } from 'react';

interface Props {
    user: any;
    image: any;
    id: string;
    save: any;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Div = styled.div`
    display: flex;
    gap: 0.5rem;
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

const ButtonSave = styled.button`
    background-color: #ef4444;
    border: none;
    opacity: 0.70;
    color: #fff;
    font-weight: bold;
    padding: 0.25rem 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 1.5rem;
    cursor: pointer;

    &:hover {
        opacity: 1;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`;

const SuperiorButtons = ({ user, image, id, save  }: Props ) => {

    // Estado para saber si el usuario está guardando la imagen
    const [ savingPost, setSavingPost ] = useState<boolean>( false );

    // Verifica si el usuario ha guardado el pin
    const alreadySavedArr = save?.filter(( item: any ) => (
        item.postedBy._id === user?.googleId
    ));
    const alreadySaved = !!alreadySavedArr?.length;

    // Guarda el pin
    const savePin = ( _id: string ) => {
        if ( !alreadySaved ) {
            setSavingPost( true );

            client
                .patch( _id )
                .setIfMissing({ save: [] })
                .insert('after', 'save[-1]', [{
                    _key: uuid(),
                    userId: user?.googleId,
                    postedBy: {
                        _type: 'postedBy',
                        _ref: user?.googleId,
                    }
                }])
                .commit()
                .then(() => {
                    window.location.reload();
                    setSavingPost( false );
                })
        }
    }

    return (
        <Container>
            <Div>
                {/* eslint-disable-next-line */}
                <DownloadButton
                    href={`${ image?.asset?.url }?dl=`}
                    download
                    onClick={ event => event.stopPropagation() }
                >
                    <MdDownloadForOffline />
                </DownloadButton>
            </Div>

            {
                alreadySaved
                ? (
                    <ButtonSave
                        type="button"
                    >
                        Guardado
                    </ButtonSave>
                ) : (
                    <ButtonSave
                        type="button"
                        onClick={ event => {
                            event.stopPropagation();
                            savePin( id );
                        }}
                    >
                        { save?.length } { savingPost ? 'Guardando...' : 'Guardar' }
                    </ButtonSave>
                )
            }
        </Container>
    );
};

export default SuperiorButtons;
