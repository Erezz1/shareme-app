import { Dispatch, SetStateAction } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { NavigateFunction } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    navigate: NavigateFunction;
}

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 0.5rem;
    border-radius: 0.375rem;
    background-color: #fff;
    border: none;
    outline: none;

    &:focus-within {
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
`;

const InputText = styled.input`
    padding: 0.5rem;
    width: 100%;
    background-color: #fff;
    outline: none;
    border: none;
`;

const Input = ({ searchTerm, setSearchTerm, navigate }: Props ) => {

    return (
        <InputContainer>
            <IoMdSearch
                fontSize={21}
                style={{ marginLeft: '0.25rem' }}
            />
            <InputText
                type="text"
                onChange={ e => setSearchTerm( e.target.value ) }
                placeholder="Search"
                value={ searchTerm }
                onFocus={ () => navigate( '/search' ) }
            />
        </InputContainer>
    );
};

export default Input;
