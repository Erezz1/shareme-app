import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import Categories from './Categories';
import User from './User';

interface Props {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    about: string;
    setAbout: Dispatch<SetStateAction<string>>;
    destination: string;
    setDestination: Dispatch<SetStateAction<string>>;
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
    user: any;
    savePin: () => void;
}

const FormContainer = styled.div`
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.25rem;
    width: 100%;

    @media ( min-width: 1024px ) {
        padding-left: 1.25rem;
    }
`;

const InputTitle = styled.input`
    border: none;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: bold;
    border-bottom: 2px solid rgb(229 231 235);
    color: #333;

    @media ( min-width: 640px ) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid #333;
    }
`;

const Input = styled.input`
    border: none;
    font-size: 0.75rem;
    color: #333;

    @media ( min-width: 640px ) {
        font-size: 1rem;
    }

    &:focus {
        outline: none;
    }
`;

const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1.25rem;
`;

const Button = styled.button`
    background-color: rgb(239 68 68);
    color: #fff;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 9999px;
    width: 7rem;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in;

    &:hover {
        background-color: rgb(235 00 00);
    }
`;

const Form = ({
    title,
    setTitle,
    about,
    setAbout,
    destination,
    setDestination,
    user,
    category,
    setCategory,
    savePin
}: Props ) => {

    return (
        <FormContainer>
            <InputTitle
                type="text"
                value={ title }
                onChange={ event => setTitle( event.target.value ) }
                placeholder="Agrega un titulo"
            />

            { user && <User user={ user } /> }

            <Input
                type="text"
                value={ about }
                onChange={ event => setAbout( event.target.value ) }
                placeholder="Agrega una descripcion"
            />

            <Input
                type="text"
                value={ destination }
                onChange={ event => setDestination( event.target.value ) }
                placeholder="Agrega un link a enlazar"
            />

            <CategoriesContainer>
                <Categories
                    setCategory={ setCategory }
                    category={ category }
                />

                <ButtonContainer>
                    <Button
                        type="button"
                        onClick={ savePin }
                    >Guardar Pin</Button>
                </ButtonContainer>
            </CategoriesContainer>

        </FormContainer>
    );
};

export default Form;
