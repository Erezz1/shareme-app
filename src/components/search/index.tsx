import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import styled from 'styled-components';

import MasonryLayout from '../feed/components/MasonryLayout';
import Spinner from '../Spinner';
import { client } from '../../client';
import { feedQuery, searchQuery } from '../../utils/data';

interface Props {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Div = styled.div`
    margin-top: 2.5rem;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
`;

const Search = ({ searchTerm, setSearchTerm }: Props ) => {

    const [ pins, setPins ] = useState<any[]>([]);
    const [ loading, setLoading ] = useState( false );

    useEffect(() => {
        setLoading( true );

        if ( searchTerm ) {
            const query = searchQuery( searchTerm.toLowerCase() );

            client
                .fetch( query )
                .then( data => {
                    setPins( data );
                    setLoading( false );
                })

        } else {
            client
                .fetch( feedQuery )
                .then( data => {
                    setPins( data );
                    setLoading( false );
                })
        }
    }, [ searchTerm ]);
    

    return (
        <>
            {
                loading && <Spinner message="Estamos buscando pins para ti!" />
            }

            {
                pins.length > 0 && <MasonryLayout pins={ pins } />
            }

            {
                pins.length === 0 && searchTerm !== '' && !loading && (
                    <Div>No encontramos pins. ):</Div>
                )
            }
        </>
    );
};

export default Search;
