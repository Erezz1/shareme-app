import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import MasonryLayout from './components/MasonryLayout';

import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/data';

const Feed = () => {

    const [ loading, setLoading ] = useState( false );
    const [ pins, setPins ] = useState<any[]>([]);

    const { categoryId } = useParams();

    // Effect que se ejecuta cada que se cambia de categoria para obtener los pins
    useEffect(() => {
        setLoading( true );

        if ( categoryId ) {
            // Query para obtener la busqueda del usuario
            const query = searchQuery( categoryId );

            // Peticion a la API para obtener los pins de la categoria
            client.fetch( query )
                .then( data => {
                    setPins( data );
                    setLoading( false );
                })
                .catch( error => console.log( error ) );

        } else {
            // Peticion a la API para obtener los pins del feed
            client.fetch( feedQuery )
                .then( data => {
                    setPins( data );
                    setLoading( false );
                })
                .catch( error => console.log( error ) );
        }
    }, [ categoryId ]);

    // Renderizar el componente spinner si esta cargando
    if ( loading ) {
        return <Spinner message="We are adding new ideas to your feed!" />;
    }

    if ( pins.length === 0 ) {
        return <h2>No hay pins para mostrar</h2>;
    }

    return (
        <>
            {
                pins.length > 0
                && <MasonryLayout pins={ pins } />
            }
        </>
    );
};

export default Feed;
