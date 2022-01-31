import styled from 'styled-components';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { client } from '../../../client';

interface Props {
    user: any;
    destination: string;
    postedBy: any;
    id: string;
}

const OneMoreDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`;

const LinkDestination = styled.a`
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #333;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    opacity: 0.70;

    &:hover {
        opacity: 1;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`;

const ButtonDelete = styled.button`
    background-color: #fff;
    border: none;
    opacity: 0.70;
    color: #333;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 1;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
`;

const InferiorButtons = ({ destination, postedBy, user, id }: Props ) => {

    // Elimina el pin con su id
    const deletePin = ( _id: string ) => {
        client
            .delete( _id )
            .then(() => {
                window.location.reload();
            });
    }

    return (
        <OneMoreDiv>
            {
                destination && (
                    <LinkDestination
                        href={ destination }
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={ event => event.stopPropagation() }
                    >
                        <BsFillArrowUpRightCircleFill />
                        {
                            destination.length > 15
                                ? `${ destination.slice( 0, 12 ) }...`
                                : destination
                        }
                    </LinkDestination>
                )
            }

            {
                // Si el usuario es el mismo que el que publico el pin, se muestra el boton de eliminar
                postedBy?._id === user?.googleId
                && (
                    <ButtonDelete
                        type="button"
                        onClick={ event => {
                            event.stopPropagation();
                            deletePin( id );
                        }}
                    >
                        <AiTwotoneDelete />
                    </ButtonDelete>
                )
            }
        </OneMoreDiv>
    );
};

export default InferiorButtons;
